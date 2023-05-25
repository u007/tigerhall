import { Box, Button, Flex, Link, Text } from '@chakra-ui/react';
import React from 'react';

const Nav = () => {
  return (
    <Flex bg="gray.200" p={4} align="center">
      <Box flex={1}>
        <Text fontSize="xl" fontWeight="bold">
          <Link href="/">Tigerhall</Link>
        </Text>
      </Box>
      <Box>
        <Button as={Link} href="/" variant="link" mx={2}>
          Home
        </Button>
        <Button as={Link} href="/about" variant="link" mx={2}>
          About
        </Button>
        <Button as={Link} href="/contact" variant="link" mx={2}>
          Contact
        </Button>
      </Box>
    </Flex>
  );
};

export default Nav;
