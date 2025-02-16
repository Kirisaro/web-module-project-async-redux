import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import App from './App';
import './index.css';

import { reducer } from './Reducers'

const store = createStore(reducer, applyMiddleware(logger, thunk))

const rootElement = document.getElementById('root')
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  rootElement
);