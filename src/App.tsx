import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import AuthForm from './components/AuthForm/AuthForm'
import CrmCompanyAuth from './pages/CrmCompanyAuth/CrmCompanyAuth'

function App() {
  return (
    <Routes>
      <Route path="/" element={<CrmCompanyAuth />}>
        <Route index element={<AuthForm />} />
      </Route>
    </Routes>
  )
}

export default App
