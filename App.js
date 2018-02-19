import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Router from './src/Router';
import firebase from 'firebase';
import reducers from './src/reducers';



class App extends Component {
  componentWillMount() {
    const config = {
        apiKey: 'AIzaSyDTu3fYpy7hhILn_wpfn5VC7SPrWrbNrko',
        authDomain: 'to-do-5f904.firebaseapp.com',
        databaseURL: 'https://to-do-5f904.firebaseio.com',
        projectId: 'to-do-5f904',
        storageBucket: 'to-do-5f904.appspot.com',
        messagingSenderId: '989434349006'
      };
      firebase.initializeApp(config);
  }

render() {
  const store= createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
