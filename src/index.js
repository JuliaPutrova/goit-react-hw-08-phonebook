import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import data from './redux/store.js';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={data.store}>
      <PersistGate loading={null} persistor={data.persistor}>
        <Router>
          <App />
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
