import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Welcome from './Welcome'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter basename='/'>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<Home />}></Route>
        <Route path="/about" element={<Welcome />}></Route>
      </Routes>
    </HashRouter>
  </StrictMode>,
)
