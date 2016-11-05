/* @flow */

// Load polyfills
import 'babel-polyfill';

// Import dependencies
import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import Root from './containers/Root';

render(
  <Root history={browserHistory} />,
  document.getElementById('app')
);
