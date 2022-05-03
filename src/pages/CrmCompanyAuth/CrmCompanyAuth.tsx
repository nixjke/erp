import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { useAppSelector } from '../../store/redux-hooks'

export default function CrmCompanyAuth() {
  const signin = useAppSelector(store => store.signin)
  
  return (
    <div>
      {signin.isHeader ? <Header /> : ''}

      <Outlet />

      <Footer />
    </div>
  )
}
