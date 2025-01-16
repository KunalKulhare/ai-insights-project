import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import store, { AppDispatch } from './store/store'; 
import { getAIInsights } from './store/aiSlice'; 
import Dashboard from './pages/Dashboard';
import { Container, Typography } from '@mui/material';
import "../src/styles/style.css";

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>(); 

  useEffect(() => {
    dispatch(getAIInsights());
  }, [dispatch]);

  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        AI Insights Dashboard
      </Typography>
      <Dashboard />
    </Container>
  );
};

const AppWithStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWithStore;
