import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CSSTransition } from 'react-transition-group'; // Import CSSTransition
import './index.css';
import App from './App';

const theme = createTheme({
  // Theme configuration
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <CSSTransition
        in={true} // Set to true to trigger the animation on mount
        appear={true} // Set to true to apply the animation on initial render
        timeout={500} // Adjust the timeout value to match the animation duration
        classNames="grid"
      >
        <App />
      </CSSTransition>
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);
