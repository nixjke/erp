/* eslint-disable no-useless-escape */
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
import axios, { Method } from 'axios'

export default function AuthForm() {
  const dispath = useDispatch()
  const navigate = useNavigate()
  const signin = useAppSelector(store => store.signin)

  console.log(signin.isHeader)

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [emailDirty, setEmailDirty] = React.useState(false)
  const [passwordDirty, setPasswordDirty] = React.useState(false)

  React.useEffect(() => {
    dispath(fetchContainer())
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const handleLogin = async (email: string, password: string, url: string, method: Method = 'GET') => {
    console.log(method)
    try {
      const response = await axios({
        method: method,
        url: `http://localhost:3001${url}`,
        data: {
          email: email,
          password: password,
        },
      })
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
            styles={params.styles}
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
            styles={params.styles}
          />
        )
      case 'checkbox':
        return (
          <label style={params.styles} key={params.id + params.type} className={s.label}>
            <Checkbox />
            <Body1>{params.title}</Body1>
          </label>
        )
      case 'Get':
        return (
          <DecorativeLink style={params.styles} key={params.id + params.type}>
            {params.title}
          </DecorativeLink>
        )
      case 'post':
        return (
          <Button
            onClick={() => {
              handleLogin(email, password, params.routeUrn, params.type)
            }}
            style={params.styles}
            key={params.id + params.type}
          >
            {params.title}
          </Button>
        )
      case 'Text':
        return (
          <Body1 key={params.id + params.type} className={s.text}>
            {params.title}
          </Body1>
        )
      case 'hr':
        return <hr style={params.styles} />
      default:
        return
    }
  }

  if (!signin.isLoading)
    return (
      <div className={s.authForm}>
        <ShadowBox>
          <form>
            <h1>Loading...</h1>
          </form>
        </ShadowBox>
      </div>
    )

  return (
    <div className={s.authForm}>
      <ShadowBox>
        <form onSubmit={e => e.preventDefault()}>
          <div className={s.title}>{signin.item.data.blocks[0].BlockTitle}</div>
          {signin.item.formData.map((block: any) => renderAuthForm(block))}
        </form>
      </ShadowBox>
    </div>
  )
}

// Пользователя нет
//Альтернативные сценарии (исключения)
