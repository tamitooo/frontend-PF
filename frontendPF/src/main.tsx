import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App' // Asegúrate que importa desde './App' y no otra ruta
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)