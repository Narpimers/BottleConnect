import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HandOverPage from './pages/HandOverPage';
import PickUpPage from './pages/PickUpPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Navbar from './components/Navbar';
import AddPage from './pages/AddPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/hand-over" element={<HandOverPage />} />
        <Route path="/pick-up" element={<PickUpPage />} />
        <Route path="/add" element={<AddPage />} />
      </Routes>
    </Router>
  );
};

export default App;