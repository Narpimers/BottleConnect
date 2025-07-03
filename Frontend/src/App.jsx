import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import HandOver from './pages/HandOver';
import PickupList from './pages/PickupList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/hand-over" element={<HandOver />} />
        <Route path="/pickup-list" element={<PickupList />} />
      </Routes>
    </Router>
  );
};

export default App;