import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import Nav from '@/components/Nav';

const DefaultLayout = () => {
  return (
    <Box>
      <header>
        <Nav />
      </header>

      <main className="min-h-screen bg-black">
        <Outlet />
      </main>

      {/* Footer */}
      <footer>
        <p className="text-center">
          &copy; {new Date().getFullYear()} Tigerhall. All rights reserved.
        </p>
      </footer>
    </Box>
  );
};

export default DefaultLayout;
