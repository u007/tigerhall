import { CloseIcon, SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { SyntheticEvent, useRef, useState } from 'react';

type Props = {
  value: string;
  onChange: (value: any) => void;
  onSearch: (value: string) => void;
};

const Search = ({ value, onChange, onSearch }: Props) => {
  const lastSearchTime = useRef(0);

  const onSearchKey = (e: any) => {
    // console.log('onSearchKey', e.target.value);
    onChange(e);

    lastSearchTime.current = Date.now();
    setTimeout(() => {
      if (Date.now() - lastSearchTime.current < 300) {
        return;
      }
      onSearch(e.target.value);
    }, 300);
  };

  return (
    <Stack spacing={4}>
      <InputGroup colorScheme="white">
        <Input
          value={value}
          onChange={onSearchKey}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              onSearch(value);
            }
          }}
          borderColor="#797670"
          bgColor="#383733"
          color="white"
        />
        <InputLeftElement>
          <Button colorScheme="white">
            <SearchIcon />
          </Button>
        </InputLeftElement>

        {value?.length > 0 && (
          <InputRightElement>
            <IconButton
              colorScheme="white"
              aria-label="clear"
              icon={<CloseIcon />}
              onClick={() => {
                onChange({ target: { value: '' } });
                onSearch('');
              }}
            />
          </InputRightElement>
        )}
      </InputGroup>
    </Stack>
  );
};

export default Search;
