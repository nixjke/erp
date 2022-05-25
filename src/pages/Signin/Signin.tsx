import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../molecules/features/Footer/Footer'
import Header from '../../molecules/features/Header/Header'
import { useGetSigninQuery } from '../../store/Signin/signinApi'

const Signin: React.FC = () => {
  const { data } = useGetSigninQuery()
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Header logo={''} name='CRM CompanyName' />
      <img
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
        src={data?.settings.Body.background}
        alt=''
      />
      <Outlet />
      <Footer link='© 2022, mysmartoffice.pro' privacyPolicy='Политика конфиденциальности' />
    </div>
  )
}

export default Signin
