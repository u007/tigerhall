import './styles/App.scss';

import { ChakraProvider, DarkMode } from '@chakra-ui/react';
import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import DefaultLayout from './layouts/DefaultLayout';
import HomePage from './pages/Home';
import NoMatch404Page from './pages/NoMatch404';
import theme from './styles/theme';
// const HomePage = lazy(() => import('./pages/Home'));
// const NoMatch404Page = lazy(() => import('./pages/NoMatch404'));

// const HomePage = lazy(() => import('./pages/Home'));
// const NoMatch404Page = lazy(() => import('./pages/NoMatch404'));

function App() {
  return (
    <ChakraProvider resetCSS={false} theme={theme}>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NoMatch404Page />} />
        </Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
