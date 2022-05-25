import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Signin from './pages/Signin/Signin'
import ActivationForm from './templates/Signin/ActivationForm/ActivationForm'
import AuthForm from './templates/Signin/AuthForm/AuthForm'
import RecoveryEmail from './templates/Signin/RecoveryEmail/RecoveryEmail'
import SetNewPassword from './templates/Signin/SetNewPassword/SetNewPassword'
import Step1 from './pages/Signin/PlatformActivation/Step1/Step1'
import Step2 from './pages/Signin/PlatformActivation/Step2/Step2'
import Step3 from './pages/Signin/PlatformActivation/Step3/Step3'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Signin />}>
        <Route index element={<AuthForm />} />
        <Route path='/activation' element={<ActivationForm />} />
        <Route path='/recoveryemail' element={<RecoveryEmail />} />
        <Route path='/setnewpassword' element={<SetNewPassword />} />
      </Route>
      <Route path='/step1' element={<Step1 />} />
      <Route path='/step2' element={<Step2 />} />
      <Route path='/step3' element={<Step3 />} />
    </Routes>
  )
}

export default App
