import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/tailwind.css"
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename='/Mysite'>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
