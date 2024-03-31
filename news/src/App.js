// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import CreateNewsFeed from './components/CreateNewsFeed/CreateNewsFeed';
import ManageNews from './components/ManageNewsFeeds/ManageNewsFeeds';
import PerformanceReports from './components/PerformanceReports/PerformanceReports';
import Navbar from './components/Header/Header';
import "./components/Dashboard/Dashboard.css";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Dashboard/>} />
        <Route path='/create' element={<CreateNewsFeed/>} />
        <Route path='/manage' element={<ManageNews/>} />
        <Route path='/reports' element={<PerformanceReports/>} />
      </Routes>
    </Router>
  );
}

export default App;
