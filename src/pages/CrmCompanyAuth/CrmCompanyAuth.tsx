import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { useAppSelector } from '../../store/redux-hooks'

export default function CrmCompanyAuth() {
  const signin = useAppSelector(store => store.signin)

  return (
    <div
      style={{
        backgroundImage: `url(${signin.isLoading ? signin.item.settings.Body.background : ''})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Header />

      <Outlet />

      <Footer />
    </div>
  )
}
