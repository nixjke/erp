import React from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../store/redux-hooks'
import { fetchContainer } from '../../store/slices/siginSlice/signinSlice'
import Body1 from '../Body1/Body1'
import Button from '../Button/Button'
import Input from '../Input/Input'
import ShadowBox from '../ShadowBox/ShadowBox'
import s from './AuthForm.module.scss'

export default function AuthForm() {
  const dispath = useDispatch()
  const signin = useAppSelector(store => store.signin.item)

  React.useEffect(() => {
    dispath(fetchContainer())
  }, [])

  const signinButtons = signin.data.Buttons
  const signinLinks = signin.data.Links
  const signinFields = signin.data.blocks[0].Fields
  const signinTexts = signin.data.blocks[0].Texts

  const allBlocks = [...signinButtons, ...signinLinks, ...signinFields, ...signinTexts]
  allBlocks.sort((a, b) => {
    return a.sortOrder - b.sortOrder
  })

  const [emal, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [emailDirty, setEmailDirty] = React.useState(false)
  const [passwordlDirty, setPasswordDirty] = React.useState(false)
  const [emailError, setEmailError] = React.useState('Введите корректный Email')
  const [passwordError, setPasswordError] = React.useState('Введите корректный Password')

  const blurHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'Email':
        setEmailDirty(true)
        break
      case 'password':
        setPasswordDirty(true)
        break
    }
  }

  return (
    <div className={s.authForm}>
      <ShadowBox>
        <div className={s.title}>Войти в аккаунт</div>
        <Button>Войти</Button>
        <Input error={+false} errortext="Введите корректный Email" placeholder="Text" />
        <div className={s.text}>
          <Body1>Еще нет аккаунта?</Body1>
        </div>
      </ShadowBox>
    </div>
  )
}
