import React from 'react';
import Routes from './src/routes';
import {GlobalProvider} from './src/providers';

const App = () => {
  return (
    <GlobalProvider>
      <Routes />
    </GlobalProvider>
  );
};

export default App;
