import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import BrandConsultation from './BrandConsultation.tsx'
import Services from './Services.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/brand-consultation" element={<BrandConsultation />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
