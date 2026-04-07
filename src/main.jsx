import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Routes/App'
import '../src/assets/css/main.css';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from 'axios'


axios.defaults.baseURL = 'https://backend-barberia.vercel.app/';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)