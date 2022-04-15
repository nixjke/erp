import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import AuthForm from './components/AuthForm/AuthForm'
import AuthPlatform from './components/AuthPlatform/AuthPlatform'
import BlankTemplate from './components/BlankTemplate/BlankTemplate'
import CrmCompanyAuth from './pages/CrmCompanyAuth/CrmCompanyAuth'
import SelectPlatform from './pages/SelectPlatform/SelectPlatform'

function App() {
  return (
    <Routes>
      <Route path="/" element={<SelectPlatform />}>
        <Route index element={<BlankTemplate />} />
        <Route path="auth-platform" element={<AuthPlatform />} />
      </Route>
      <Route path="/company-name" element={<CrmCompanyAuth />}>
        <Route path="signin" element={<AuthForm />} />
      </Route>
    </Routes>
  )
}

export default App
