import {
  Box,
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
import React, { useState } from 'react';

import Search from './Search';

type Props = {
  results: {
    title: string;
    description: string;
    link: string;
  }[];
};

const ListCourses = () => {
  const [results, setResults] = useState<Props['results']>([]);
  const [search, setSearch] = useState('');

  return (
    <Box>
      {/* <Heading as="h1" size="xl">
        Courses
      </Heading> */}
      <Search
        value={search}
        onChange={(e) => {
          console.log('e', e);
        }}
      />

      <VStack spacing={4} align="stretch" mt={4}>
        {results.map((result, index) => (
          <Box key={index} borderWidth="1px" borderRadius="md" p={4}>
            <Heading as="h2" size="lg">
              {result.title}
            </Heading>
            <Text>{result.description}</Text>
            <Link href={result.link} color="blue.500">
              Read more
            </Link>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default ListCourses;
