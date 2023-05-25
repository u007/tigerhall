import React from 'react'
import { Box, Heading, Text, Link, VStack } from '@chakra-ui/react'

const CardList = ({ results }) => {
  return (
    <Box>
      <Heading as="h1" size="xl">
        Courses
      </Heading>
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
