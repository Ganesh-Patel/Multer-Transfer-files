import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Auth/Login.jsx';
import SignUp from './Components/Auth/SignUp.jsx';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </ div>
  );
}

export default App;
