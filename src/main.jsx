// Import necessary modules and styles
import React from 'react';

import './index.css';
import App from './App';
import { store } from "./redux/store"; 
// Import createRoot from 'react-dom'
import { createRoot } from 'react-dom/client';
// Import the Provider from react-redux
import { Provider } from 'react-redux';


// Use createRoot instead of ReactDOM.render
const root = createRoot(document.getElementById('root'));




root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
