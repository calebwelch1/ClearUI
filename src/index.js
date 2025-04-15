import React from 'react';
import { createRoot } from 'react-dom/client'; // Use createRoot
import { Provider } from 'react-redux';
import App from './App';
import { store } from './redux/store';

// Get the root element
const rootElement = document.getElementById('root');
// Create a root
const root = createRoot(rootElement);
// Render the app
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);