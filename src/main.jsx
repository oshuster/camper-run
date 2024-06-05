import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/common.scss';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ChakraProvider>
        <BrowserRouter basename="/camper-run/">
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </PersistGate>
  </Provider>
  //</React.StrictMode>
);
