import 'react-circular-progressbar/dist/styles.css';

import { useQuery } from '@apollo/client';
import { Alert, AlertIcon, Box, Card, Skeleton, Stack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import { podcasts } from '../../datas/courses';
import { queryPodCasts } from '../../queries/postcast';
import Course from './Podcast';
import { PodcastType } from './PodcastType';
import Search from './Search';

// type Props = {
//   results: CourseType[];
// };
const ListPodcasts = () => {
  // const [results, setResults] = useState<PodcastType[]>(podcasts);
  const [search, setSearch] = useState('');
  const { loading, error, results } = useQuery(queryPodCasts(), {
    variables: { search, limit: 20 },
  });

  useEffect(() => {
    if (!loading) {
      console.log('results', results, error);
    }
  }, [loading]);
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
      {error && (
        <Alert status="error">
          <AlertIcon />
          {error.message}
        </Alert>
      )}
      {loading && (
        <Stack>
          <Card>
            <Skeleton height="20px" />
            <Skeleton height="20px" />
          </Card>
          <Card>
            <Skeleton height="20px" />
            <Skeleton height="20px" />
          </Card>
        </Stack>
      )}
      {/* {!loading && (
        <Stack spacing={4} align="stretch" mt={4}>
          {results.map((result, index) => (
            <Course {...result} key={index} />
          ))}
        </Stack>
      )} */}
    </Box>
  );
};

export default ListPodcasts;
