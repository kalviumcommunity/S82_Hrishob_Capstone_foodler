import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Dashboard from './pages/Dashboard/Dashboard';
import DayscholarDashboard from './pages/Dashboard/DayscholarDashboard';
import HostelerDashboard from './pages/Dashboard/HostelerDashboard';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} /> 
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/dayscholarDashboard" element={<DayscholarDashboard/>}/>
      <Route path="/hostelerDashboard" element={<HostelerDashboard/>}/>
    </Routes>
  );
};

export default App;
