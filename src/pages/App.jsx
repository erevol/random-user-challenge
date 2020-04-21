import React from 'react';
import { hot, setConfig } from 'react-hot-loader';
import 'semantic-ui-css/semantic.min.css';
import Main from './Main/Main';

setConfig({ pureSFC: true });

const App = () => (
  <Main />
);

export default hot(module)(App);