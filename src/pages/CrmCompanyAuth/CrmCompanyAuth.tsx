import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

export default function CrmCompanyAuth() {
  return (
    <div
      style={{
        backgroundImage:
          'url(https://sun9-61.userapi.com/s/v1/if2/ci9fT513HSYjUGJcq2B4DtMPt1h26bnKXQyhT_bFhAxqZal0jvzUK5mZSZDqkJ5TrXHi-pCorhZnkjiUNnctorMq.jpg?size=1920x1080&quality=96&type=album)',
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
