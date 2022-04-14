import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import AuthPlatform from './components/AuthPlatform/AuthPlatform'
import BlankTemplate from './components/BlankTemplate/BlankTemplate'
import SelectPlatform from './pages/SelectPlatform/SelectPlatform'

function App() {
  return (
    <Routes>
      <Route path="/" element={<SelectPlatform />}>
        <Route index element={<BlankTemplate />} />
        <Route path="auth-platform" element={<AuthPlatform />} />
      </Route>
    </Routes>
  )
}

export default App
