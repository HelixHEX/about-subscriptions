import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'

// import fonts
import '@fontsource/changa/200.css'
import '@fontsource/changa/300.css'
import '@fontsource/changa/400.css'
import '@fontsource/changa/500.css'
import '@fontsource/changa/600.css'
import '@fontsource/changa/700.css'
import '@fontsource/changa/800.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
