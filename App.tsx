import React from 'react';
import { Provider } from 'react-redux';

import Routes from '@router';

import store from '@src/store';

import '@src/i18n';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}
