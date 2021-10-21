import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import rootReducers from './redux/rootReducers';
import thunk from 'redux-thunk';
import devToolsEnhancer from 'remote-redux-devtools';

import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
const loggerMiddleware = createLogger();

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
const store = createStore(rootReducers,composeWithDevTools(applyMiddleware(thunk, loggerMiddleware)));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
