import { Center } from '@chakra-ui/react';
import ListPodcasts from 'components/podcasts/ListPodcast';
import React from 'react';

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
