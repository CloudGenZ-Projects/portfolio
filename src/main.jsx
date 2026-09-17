import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { applyThemeTokens } from './theme/colors.js'
import App from './App.jsx'

// Apply the single-source-of-truth brand tokens to the document
applyThemeTokens()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
