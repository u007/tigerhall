import { Center } from '@chakra-ui/react';
import React from 'react';

import ListCourses from '../courses/ListCourses';

const Home = () => {
  return (
    <Center maxWidth={'433px'} className="mx-auto">
      <div className="mt-4">
        <ListCourses />
      </div>
    </Center>
  );
};

export default Home;
