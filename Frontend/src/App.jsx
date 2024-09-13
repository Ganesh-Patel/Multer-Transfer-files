import React,{useContext} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Auth/Login.jsx';
import SignUp from './Components/Auth/SignUp.jsx';
import { UserContext } from './Components/Context/UserContext.jsx'
import ProtectedRoute from './Components/Route/ProtectedRoute.jsx'; 


function App() {
  const { authToken } = useContext(UserContext); 
  return (
    <div className="flex flex-col min-h-screen">
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<SignUp />} />
      <Route path="/signup" element={<SignUp />} />
       <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
      </Routes>
    </ div>
  );
}

export default App;
