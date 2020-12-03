import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './mockServer';
import { Provider } from 'react-redux';
import store from './redux/store';

// const store = createStore(
//   TokenReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
