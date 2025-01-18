import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Credentials from './context/credentials.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Credentials>
      <App />
    </Credentials>
  </StrictMode>
)
