import React from 'react';
import { hot, setConfig } from 'react-hot-loader';
import Main from './Main/Main';

setConfig({ pureSFC: true });

const App = () => (
  <Main />
);

export default hot(module)(App);