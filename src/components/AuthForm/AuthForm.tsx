import React from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../store/redux-hooks'
import { fetchContainer } from '../../store/slices/siginSlice/signinSlice'
import Body1 from '../Body1/Body1'
import Button from '../Button/Button'
import Input from '../Input/Input'
import DecorativeLink from '../DecorativeLink/DecorativeLink'
import ShadowBox from '../ShadowBox/ShadowBox'
import s from './AuthForm.module.scss'
import Checkbox from '../Checkbox/Checkbox'

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

  const renderAuthForm = (params: any) => {
    console.log(params)
    switch (params.type) {
      case 'Email':
        return (
          <Input
            key={params.id + params.type}
            error={+false}
            errortext="Введите корректный Email"
            placeholder={params.title}
          />
        )
      case 'password':
        return (
          <Input
            key={params.id + params.type}
            error={+false}
            errortext="Введите корректный пароль"
            placeholder={params.title}
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

  return (
    <div className={s.authForm}>
      <ShadowBox>
        <div className={s.title}>Войти в аккаунт</div>
        {allBlocks.map(block => renderAuthForm(block))}
      </ShadowBox>
    </div>
  )
}
