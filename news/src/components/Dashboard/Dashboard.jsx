// Dashboard.js

import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import "./Dashboard.css";
import Homebar from '../Homebar/Homebar';

const Dashboard = () => {
  return (
    <div className='grid-container'>
      <Sidebar/>
      <Homebar/>
    </div>
  );
}

export default Dashboard;
