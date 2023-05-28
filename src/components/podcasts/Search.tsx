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
  onChange: (value: SyntheticEvent) => void;
};

const Search = ({ value, onChange }: Props) => {
  const search = useState(value);

  return (
    <Stack spacing={4}>
      <InputGroup colorScheme="white">
        <Input
          value={value}
          onChange={onChange}
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
