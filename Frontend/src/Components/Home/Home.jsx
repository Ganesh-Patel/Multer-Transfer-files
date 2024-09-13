import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';
import { FaBars, FaTimes } from 'react-icons/fa';
import CryptoJS from 'crypto-js';

const secretKey = 'mySecretKey'; // Use a more secure key in production

function Home() {
  const { user, setUser,authToken,setauthToken } = useContext(UserContext); 
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Store user data securely in localStorage when user logs in
  useEffect(() => {
    if (user) {
      const encryptedUserData = CryptoJS.AES.encrypt(JSON.stringify(user), secretKey).toString();
      localStorage.setItem('user', encryptedUserData);
    }
  }, [user]);

  // Retrieve user data from localStorage when the page is refreshed
  useEffect(() => {
    const encryptedUserData = localStorage.getItem('user');
    if (encryptedUserData) {
      const decryptedUserData = CryptoJS.AES.decrypt(encryptedUserData, secretKey).toString(CryptoJS.enc.Utf8);
      const userData = JSON.parse(decryptedUserData);
      setUser(userData); // Update the context with the decrypted data
    }
  }, [setUser]);

  const handleLogout = () => {
    localStorage.removeItem('user'); // Clear stored data on logout
    setUser(null); // Clear user context
    setauthToken(false);
    navigate('/login');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-teal-600 text-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Left side with logo and app name */}
          <div className="flex items-center">
            <img
              src="https://images-platform.99static.com//0yUT_MVpTXsuJPraCs5FZcW3NWg=/209x0:1291x1082/fit-in/500x500/99designs-contests-attachments/87/87865/attachment_87865022"
              alt="App Logo"
              className="h-10 w-10 mr-2"
            />
            <span className="text-2xl font-bold">MyApp</span>
          </div>

          {/* Center tabs/links for larger screens */}
          <div className="hidden md:flex space-x-8">
            <Link to="/home" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/projects" className="hover:underline">Projects</Link>
          </div>

          {/* Right side with user profile and logout */}
          <div className="hidden md:flex items-center space-x-4">
            {user && (
              <div className="flex items-center">
                <img
                  src={user.profileUrl || 'https://via.placeholder.com/40'}
                  alt="User Profile"
                  className="h-10 w-10 rounded-full"
                />
                <span className="ml-2">{user.name}</span>
              </div>
            )}
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>

          {/* Hamburger icon for mobile view */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-teal-700">
            <div className="flex flex-col items-center space-y-4 py-4">
              <Link to="/home" className="hover:underline" onClick={toggleMenu}>Home</Link>
              <Link to="/about" className="hover:underline" onClick={toggleMenu}>About</Link>
              <Link to="/projects" className="hover:underline" onClick={toggleMenu}>Projects</Link>
              {user && (
                <div className="flex flex-col items-center">
                  <img
                    src={user.profilePicture || 'https://via.placeholder.com/40'}
                    alt="User Profile"
                    className="h-10 w-10 rounded-full"
                  />
                  <span className="mt-2">{user.name}</span>
                </div>
              )}
              <button
                onClick={() => {
                  handleLogout();
                  toggleMenu();
                }}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main content */}
      <div className="flex-grow container mx-auto py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to MyApp!</h1>
        <p className="text-center text-gray-700">Explore our features and projects, and feel free to reach out to us anytime.</p>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
          <div className="space-x-4 mt-2">
            <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:underline">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
