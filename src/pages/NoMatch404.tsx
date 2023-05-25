import { Center, Link } from '@chakra-ui/react';

function NoMatch404() {
  return (
    <Center>
      <h2>Ops</h2>
      <p className="p-4 ">Page not found...</p>
      <p>
        <Link href="/">Go to the home page</Link>
      </p>
    </Center>
  );
}

export default NoMatch404;
