import { Box } from '@chakra-ui/react';
import ListPodcasts from 'components/podcasts/ListPodcast';
import React from 'react';

const Home = () => {
  return (
    <Box maxWidth="1100px" className="mx-auto" p="26px">
      <div className="my-4">
        <ListPodcasts />
      </div>
    </Box>
  );
};

export default Home;
