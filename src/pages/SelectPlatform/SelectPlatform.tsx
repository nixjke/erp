import React from 'react'
import { Outlet } from 'react-router-dom'
import InitHeader from '../../components/InitHeader/InitHeader'

export default function SelectPlatform() {
  return (
    <div>
      <InitHeader />
      <Outlet />
    </div>
  )
}
