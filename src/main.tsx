import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import Home from './pages/Home'
import About from './pages/About'
import Technology from './pages/Technology'
import RetinaDisease from './pages/tech/RetinaDisease'
import TrustworthyAI from './pages/tech/TrustworthyAI'
import BiologicalSignals from './pages/tech/BiologicalSignals'
import MCIStages from './pages/tech/MCIStages'
import DementiaBiomarkers from './pages/tech/DementiaBiomarkers'
import EarlyDetection from './pages/tech/EarlyDetection'
import './styles/tailwind.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="technology" element={<Technology />} />
          <Route path="technology/retina-disease" element={<RetinaDisease />} />
          <Route path="technology/trustworthy-ai" element={<TrustworthyAI />} />
          <Route path="technology/biological-signals" element={<BiologicalSignals />} />
          <Route path="technology/mci-stages" element={<MCIStages />} />
          <Route path="technology/dementia-biomarkers" element={<DementiaBiomarkers />} />
          <Route path="technology/early-detection" element={<EarlyDetection />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
