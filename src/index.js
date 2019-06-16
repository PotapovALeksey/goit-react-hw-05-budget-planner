import { Provider } from 'react-redux';
import React from '../node_modules/react';
import ReactDOM from '../node_modules/react-dom';
import store from './redux/store';
import App from './components/App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
