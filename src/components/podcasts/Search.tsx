import { CloseIcon, SearchIcon } from '@chakra-ui/icons';
import {
  Button,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
} from '@chakra-ui/react';
import { useRef } from 'react';

import { gray700, gray900 } from '@/styles/style';

type Props = {
  value: string;
  onChange: (value: any) => void;
  onSearch: (value: string) => void;
};

const Search = ({ value, onChange, onSearch }: Props) => {
  const lastSearchTime = useRef(0);

  const onSearchKey = (e: any) => {
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
          borderColor={gray700}
          bgColor={gray900}
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
