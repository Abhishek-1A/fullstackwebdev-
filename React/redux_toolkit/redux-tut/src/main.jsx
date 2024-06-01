import React from 'react';
import ReactDOM from 'react-dom/client';  // Correct import for createRoot
import { Provider } from 'react-redux';
import App from './App';
import { store } from './app/store';
import { Counter } from './features/Counter/Counter.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* <App /> */}
    <Counter />
  </Provider>
);