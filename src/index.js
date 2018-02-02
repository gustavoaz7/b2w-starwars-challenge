import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker'
import AppReducers from './reducers/AppReducers'

const store = createStore(AppReducers, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();
