import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {UserProvider} from './Components/Context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <UserProvider>
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
        />
        <App />
      </UserProvider>
    </Router>
  </StrictMode>,
)
