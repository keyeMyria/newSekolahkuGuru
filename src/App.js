import React, { Component } from 'react';
import { View, Text, BackHandler, ToastAndroid, Platform } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import RouterWrapper from './RouterWrapper';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { backPress: false };
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    //const store = createStore(() => {});

    return (
      <Provider store={store}>
        <RouterWrapper />
      </Provider>
    );
  }
}

export default App;
