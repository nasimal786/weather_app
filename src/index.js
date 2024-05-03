import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StateContextProvider } from './images/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateContextProvider>
    <App />
    </StateContextProvider>
  </React.StrictMode>
);

