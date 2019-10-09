import React from 'react';
import {Provider} from 'react-redux';
import App from '../containers/App';
import configureStore from '../store';
import {StatusBar} from 'react-native';
import ErrorBoundary from './ErrorBoundary';

const store = configureStore();

function Root() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <StatusBar barStyle="light-content" backgroundColor="#2c2c2c" />
        <App />
      </Provider>
    </ErrorBoundary>
  );
}

export default Root;
