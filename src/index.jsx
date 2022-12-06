import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import './style/styles.scss';
import App from './App';
import UserProvider from './UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
    <React.StrictMode>
        <App />
      </React.StrictMode>
  </UserProvider>
 
);