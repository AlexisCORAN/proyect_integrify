import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './Pages/App';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#9ccc65",
      light: "#cfff95",
      dark: "#6b9b37"
    },
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App></App>
    </ThemeProvider>
    
  </React.StrictMode>
);
