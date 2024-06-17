import { persistor, store } from './redux/store.js';
import { BrowserRouter } from 'react-router-dom';
// eslint-disable-next-line n/no-missing-import
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App/App.jsx';

import { ThemeProvider } from './components/ThemeContext/ThemeContext.jsx';

import 'modern-normalize';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
