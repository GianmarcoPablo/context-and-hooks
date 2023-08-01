import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import PacientesProvider from './context/PacientesProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PacientesProvider>
      <App />
    </PacientesProvider>
  </React.StrictMode>
)
