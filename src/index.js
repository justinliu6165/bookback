import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers/rootReducer';
import thunk from 'redux-thunk';
import firebase from "firebase/app";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import {
  getFirestore,
  createFirestoreInstance,
  reduxFirestore
} from "redux-firestore";

import firebaseConfig from './config/firebaseConfig';

// react-redux-firebase config
const rrfConfig = {};

const middlewares = [
  thunk.withExtraArgument({ getFirestore })
]

const store = createStore(
  rootReducer, 
  compose(
    applyMiddleware(...middlewares),
    reduxFirestore(firebaseConfig)
  )
);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
