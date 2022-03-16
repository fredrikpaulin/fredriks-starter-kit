import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {MainStore} from './contexts/MainContext'

ReactDOM.render(
  <React.StrictMode>
    <MainStore>
      <App />
    </MainStore>
  </React.StrictMode>,
  document.getElementById('root')
);
