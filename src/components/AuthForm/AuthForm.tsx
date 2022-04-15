import React from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../store/redux-hooks'
import { fetchContainer } from '../../store/slices/siginSlice/signinSlice'
import styles from './AuthForm.module.scss'

export default function AuthForm() {
  const dispath = useDispatch()
  const signin = useAppSelector(store => store.signin)

  const { data } = signin.item

  const [blockTitle, setBlockTitle] = React.useState(data.blocks[0].BlockTitle)
  const [emailField, setEmailField] = React.useState(data.blocks[0].Fields[0])
  const [passwordField, setPasswordField] = React.useState(data.blocks[0].Fields[1])
  const [rememberMeField, setRememberMeField] = React.useState(data.blocks[0].Fields[2])
  const [haveAccountText, setHaveAccountText] = React.useState(data.blocks[0].Texts[0])
  const [rightsReserved, setRightsReserved] = React.useState(data.blocks[0].Texts[1])
  const [forgetPassword, setForgetPassword] = React.useState(data.Links[0])
  const [register, setRegister] = React.useState(data.Links[1])
  const [signInButton, setSignInButton] = React.useState(data.Buttons[0])

  React.useEffect(() => {
    dispath(fetchContainer())
  }, [])

  return (
    <div className={styles.authForm}>
      <form className={styles.form}>
        <h1>{blockTitle}</h1>
        <div className={styles.inputs}>
          <input className={styles.email} type="text" placeholder="Email" />
          <input className={styles.password} type="text" placeholder="Пароль" />
        </div>
        <a href="">Забыли пароль?</a>
        <label className={styles.label}>
          <input type="checkbox" />
          <span> Запомнить меня</span>
        </label>
        <button className={styles.button}>Войти</button>
        <div className={styles.register}>
          <p>Еще нет аккаунта?</p>
          <a href="">Зарегистируйтесь бесплатно</a>
        </div>
      </form>
    </div>
  )
}
