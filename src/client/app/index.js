import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import Main from './components/Main.jsx';
import Dashboard from './components/Dashboard.jsx';
import { Provider } from 'react-redux';
import './styles/styles.css';
const store = configureStore();

render(
  <Provider store={store}>
    <Dashboard />
  </Provider>,
  document.getElementById('app')
);
