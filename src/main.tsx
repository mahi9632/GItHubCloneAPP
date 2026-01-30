import './index.css'
import App from './App.tsx'
import React from 'react'
import ReactDOM from 'react-dom/client'

const root = document.getElementById('root')

if (!root) {
  throw new Error('Failed to find the root element')
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
