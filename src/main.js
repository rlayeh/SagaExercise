import 'babel-polyfill';

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware  } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducers from './reducers'
import sagas from './sagas'

import Example from "./containers/example/example"

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)

sagas.forEach(sagaMiddleware.run);

render(
  <Provider store={store}>
    <Example />
  </Provider>,
  document.getElementById('app')
)
