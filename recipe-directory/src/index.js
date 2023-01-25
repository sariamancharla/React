import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ThemeProvider} from './context/ThemeContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ThemeContext.Provider value={{color:'blue'}}> */}
    <ThemeProvider>
        <App />
      </ThemeProvider>
    {/* </ThemeContext.Provider> */}
  </React.StrictMode>
);