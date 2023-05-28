import 'react-circular-progressbar/dist/styles.css';

import { useQuery } from '@apollo/client';
import {
  Alert,
  AlertIcon,
  Box,
  Card,
  Fade,
  Skeleton,
  SkeletonText,
  Stack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

// import { podcasts } from '../../datas/courses';
import { queryPodCasts } from '../../queries/postcast';
import Course from './Podcast';
import { PodcastType } from './PodcastType';
import Search from './Search';

// type Props = {
//   results: CourseType[];
// };
const SkeletonCard = () => {
  return (
    <Card maxW="sm" borderWidth="1px" borderRadius="md" overflow="hidden" p="6px">
      <Skeleton height="200px" width="100%" />
      <Box p="4">
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
      </Box>
    </Card>
  );
};

const ListPodcasts = () => {
  // const [results, setResults] = useState<PodcastType[]>(podcasts);
  const [inputSearch, setInputSearch] = useState('');
  const [search, setSearch] = useState('');
  const { loading, error, data } = useQuery(queryPodCasts(), {
    variables: { keywords: search, limit: 20 },
  });

  const results: PodcastType[] =
    data?.contentCards?.edges?.map((result: PodcastType) => {
      return {
        ...result,
        duration: Math.floor(Math.random() * 500),
      };
    }) || [];

  useEffect(() => {
    if (!loading) {
      console.log('results', results, error);
    }
  }, [loading]);

  return (
    <Box>
      <Search
        value={inputSearch}
        onChange={(e) => {
          setInputSearch(e.target.value);
        }}
        onSearch={(e) => {
          setSearch(inputSearch);
        }}
      />
      {error && (
        <Alert status="error" m="4px">
          <AlertIcon />
          {error.message}
        </Alert>
      )}
      {loading && <SkeletonCard />}
      {!loading && results.length === 0 && (
        <Alert status="info" m="4px">
          No results found for <strong>{search}</strong>
        </Alert>
      )}
      {!loading && (
        <Stack spacing={4} align="stretch" mt={4}>
          {results.map((result, index) => (
            <Course {...result} key={index} />
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default ListPodcasts;
