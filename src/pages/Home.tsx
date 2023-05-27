import { Center } from '@chakra-ui/react';
import React from 'react';

import ListPodcasts from '../podcasts/ListPodcast';

const Home = () => {
  return (
    <Center maxWidth={'433px'} className="mx-auto">
      <div className="my-4">
        <ListPodcasts />
      </div>
    </Center>
  );
};

export default Home;
