import './styles/App.scss';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';

import DefaultLayout from './layouts/DefaultLayout';
import HomePage from './pages/Home';
import NoMatch404Page from './pages/NoMatch404';
import theme from './styles/theme';
// const HomePage = lazy(() => import('./pages/Home'));
// const NoMatch404Page = lazy(() => import('./pages/NoMatch404'));

// const HomePage = lazy(() => import('./pages/Home'));
// const NoMatch404Page = lazy(() => import('./pages/NoMatch404'));
const client = new ApolloClient({
  uri: 'https://api.tigerhall.net/v2/',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ChakraProvider resetCSS={false} theme={theme}>
      <ApolloProvider client={client}>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="*" element={<NoMatch404Page />} />
          </Route>
        </Routes>
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default App;
