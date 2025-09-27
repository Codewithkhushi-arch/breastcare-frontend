import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

// Hide loading spinner when app loads
const root = ReactDOM.createRoot(document.getElementById('root'))

// Remove loading spinner once React loads
const hideLoadingSpinner = () => {
  const loadingElement = document.querySelector('.loading-spinner')
  if (loadingElement) {
    loadingElement.style.display = 'none'
  }
}

// Render the app
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

// Hide loading spinner after render
setTimeout(hideLoadingSpinner, 100)