import React from 'react';
import { Container, Typography, CssBaseline } from '@mui/material';
import ApiIntegration from './ApiIntegration';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        sx={{
          backgroundColor: '#ffc0cb', 
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h4" align="center" sx={{ marginBottom: '2rem' }}>
          Welcome to My Notes App
        </Typography>
        <ApiIntegration />
      </Container>
    </React.Fragment>
  );
};


export default App;
