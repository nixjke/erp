import React from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import InitHeader from '../../components/InitHeader/InitHeader'
import { useAppSelector } from '../../store/redux-hooks'
import { fetchContainer } from '../../store/slices/signinSlice'

export default function SelectPlatform() {
  const dispath = useDispatch()
  const signin = useAppSelector(store => store.signin)

  console.log(signin.items)
  console.log(typeof signin)
  React.useEffect(() => {
    dispath(fetchContainer())
  }, [])

  return (
    <div>
      <InitHeader />
      <Outlet />
    </div>
  )
}
