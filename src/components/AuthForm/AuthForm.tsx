import React from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../store/redux-hooks'
import { useNavigate } from 'react-router-dom'
import { fetchContainer } from '../../store/slices/signinSlice'
import { setUser } from '../../store/slices/userSlice'
import s from './AuthForm.module.scss'
import Body1 from '../Body1/Body1'
import Button from '../Button/Button'
import Input from '../Input/Input'
import DecorativeLink from '../DecorativeLink/DecorativeLink'
import ShadowBox from '../ShadowBox/ShadowBox'
import Checkbox from '../Checkbox/Checkbox'
import axios from 'axios'

export default function AuthForm() {
  const dispath = useDispatch()
  const navigate = useNavigate()
  const signin = useAppSelector(store => store.signin)

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [emailDirty, setEmailDirty] = React.useState(false)
  const [passwordDirty, setPasswordDirty] = React.useState(false)

  React.useEffect(() => {
    dispath(fetchContainer())
  }, [])

  const blurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'Email':
        if (e.target.value.length > 0) return
        setEmailDirty(true)
        break
      case 'password':
        if (e.target.value.length > 0) return
        setPasswordDirty(true)
        break
    }
  }

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)

    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

    if (!String(e.target.value).toLowerCase().match(re)) {
      setEmailDirty(true)
    } else {
      setEmailDirty(false)
    }
  }

  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)

    if (e.target.value.length < 3) {
      setPasswordDirty(true)
      if (!e.target.value) setPasswordDirty(true)
    } else {
      setPasswordDirty(false)
    }
  }

  const handleLogin = async (email: string, password: string) => {
    console.log('asd')
    try {
      const response = await axios({
        method: 'POST',
        url: 'http://localhost:3001/signin',
        data: {
          email: email,
          password: password,
        },
      })
      console.log(response)
      dispath(
        setUser({
          email: response.data.user.email,
          accessToken: response.data.accessToken,
          id: response.data.user.id,
        })
      )
      navigate('/not-found')
    } catch (error) {
      console.log(error)
    }
  }

  const renderAuthForm = (params: any) => {
    switch (params.type) {
      case 'Email':
        return (
          <Input
            name={params.type}
            key={params.id + params.type}
            error={+emailDirty}
            errortext="Введите корректный Email"
            placeholder={params.title}
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              emailHandler(e)
            }}
            onBlur={(e: React.ChangeEvent<HTMLInputElement>) => blurHandler(e)}
          />
        )
      case 'password':
        return (
          <Input
            name={params.type}
            key={params.id + params.type}
            error={+passwordDirty}
            errortext="Введите корректный пароль"
            placeholder={params.title}
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              passwordHandler(e)
            }}
            onBlur={(e: React.ChangeEvent<HTMLInputElement>) => blurHandler(e)}
          />
        )
      case 'checkbox':
        return (
          <label key={params.id + params.type} className={s.label}>
            <Checkbox />
            <Body1>{params.title}</Body1>
          </label>
        )
      case 'Get':
        return <DecorativeLink key={params.id + params.type}>{params.title}</DecorativeLink>
      case 'Post':
        return <Button key={params.id + params.type}>{params.title}</Button>
      case 'Text':
        return (
          <div key={params.id + params.type} className={s.text}>
            <Body1>{params.title}</Body1>
          </div>
        )
      default:
        return
    }
  }

  if (!signin.isLoading)
    return (
      <div className={s.authForm}>
        <h1>Loading...</h1>
      </div>
    )

  return (
    <div className={s.authForm}>
      <ShadowBox>
        <form
          onSubmit={e => {
            e.preventDefault()
            handleLogin(email, password)
          }}
        >
          <div className={s.title}>{signin.item.data?.blocks[0].BlockTitle}</div>
          {/* {allBlocks.map(block => renderAuthForm(block))} */}
        </form>
      </ShadowBox>
    </div>
  )
}
