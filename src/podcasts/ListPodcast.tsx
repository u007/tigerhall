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

import { podcasts } from '../datas/courses';
import Course from './Podcast';
import { PodcastType } from './PodcastType';
import Search from './Search';

// type Props = {
//   results: CourseType[];
// };

const ListPodcasts = () => {
  const [results, setResults] = useState<PodcastType[]>(podcasts);
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

      <Stack spacing={4} align="stretch" mt={4}>
        {results.map((result, index) => (
          <Course {...result} key={index} />
        ))}
      </Stack>
    </Box>
  );
};

export default ListPodcasts;
