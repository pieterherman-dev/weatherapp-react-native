import React, { Component } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import AppNavigator from './src/config/AppNavigator';
import AppReducer from './src/reducers/AppReducer';

const reducer = combineReducers({ AppReducer });
const store = createStore(reducer, applyMiddleware());

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
