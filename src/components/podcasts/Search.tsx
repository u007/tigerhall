import { SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { SyntheticEvent, useState } from 'react';

type Props = {
  value: string;
  onChange: (value: any) => void;
  onSearch: (value: any) => void;
};

const Search = ({ value, onChange, onSearch }: Props) => {
  const search = useState(value);

  return (
    <Stack spacing={4}>
      <InputGroup colorScheme="white">
        <Input
          value={value}
          onChange={onChange}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              onSearch(e);
            }
          }}
          borderColor="#797670"
          bgColor="#383733"
        />
        <InputLeftElement>
          <Button colorScheme="white">
            <SearchIcon />
          </Button>
        </InputLeftElement>
      </InputGroup>
    </Stack>
  );
};

export default Search;
