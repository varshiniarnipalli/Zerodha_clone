import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import NavBar from './landing_page/NavBar.jsx'
import Footer from './landing_page/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <App />
      <Footer />
    </BrowserRouter>
  </StrictMode>
)