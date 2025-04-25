import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import PlantList from './components/PlantList';
import PlantDetails from './components/PlantDetails';
import AddPlant from './components/AddPlant';
import Login from './components/Login';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2c3e50',
    },
    secondary: {
      main: '#3498db',
    },
    background: {
      default: '#f4f4f4',
    },
  },
  typography: {
    fontFamily: '"Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/plants" element={<PlantList />} />
            <Route path="/plants/:id" element={<PlantDetails />} />
            <Route path="/add-plant" element={<AddPlant />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App; 