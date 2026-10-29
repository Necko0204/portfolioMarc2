import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { NotFound } from './NotFound.tsx'

const Page = window.location.pathname === '/' || window.location.pathname === '/index.html' ? App : NotFound

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)
