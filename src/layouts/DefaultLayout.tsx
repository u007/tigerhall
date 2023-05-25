import { Link } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import Nav from '../components/Nav';

const DefaultLayout = () => {
  return (
    <div>
      <header>
        <Nav />
      </header>

      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer>
        <p className="text-center">
          &copy; {new Date().getFullYear()} Tiger hall Pte Ltd. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default DefaultLayout;
