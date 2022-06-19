import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Styles
import { ThemeProvider } from "styled-components"
import theme from "./utils/theme"
import { GlobalStyle } from "./utils/global"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();