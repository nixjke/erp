import React from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../store/redux-hooks'
import { fetchContainer } from '../../store/slices/siginSlice/signinSlice'
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
      <form className={s.form}>
        <h1>{signin.data.blocks[0].BlockTitle}</h1>
        {allBlocks.map(block => {
          if (block.type === 'Email') {
            return (
              <div>
                <input
                  onBlur={e => blurHandle(e)}
                  name={block.type}
                  key={block.title + block.id}
                  className={s.email}
                  type="text"
                  placeholder="Email"
                />{' '}
                {(emailDirty && emailError) && <div className={s.error}>{emailError}</div>}
              </div>
            )
          }
          if (block.type === 'password')
            return <input key={block.title + block.id} className={s.password} type="text" placeholder="Пароль" />
          if (block.title === 'Забыли пароль')
            return (
              <a key={block.title + block.id} href="">
                {signin.data.Links[0].title}
              </a>
            )
          if (block.type === 'checkbox')
            return (
              <label key={block.title + block.id} className={s.label}>
                <input type="checkbox" />
                <span>{block.title}</span>
              </label>
            )
          if (block.title === 'Войти')
            return (
              <button key={block.title + block.id} className={s.button}>
                {signin.data.Buttons[0].title}
              </button>
            )
          if (block.title === 'Еще нет аккаунта?')
            return <p key={block.title + block.id}>{signin.data.blocks[0].Texts[0].title}</p>
          if (block.title === 'Зарегистрируйтесь бесплатно')
            return (
              <a key={block.title + block.id} href="">
                {signin.data.Links[1].title}
              </a>
            )
        })}
      </form>
    </div>
  )
}
