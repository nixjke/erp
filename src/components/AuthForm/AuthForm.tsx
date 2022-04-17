import React from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../store/redux-hooks'
import { fetchContainer } from '../../store/slices/siginSlice/signinSlice'
import styles from './AuthForm.module.scss'

export default function AuthForm() {
  const dispath = useDispatch()
  const signin = useAppSelector(store => store.signin)

  React.useEffect(() => {
    dispath(fetchContainer())
  }, [])

  return (
    <div className={styles.authForm}>
      {/* <form className={styles.form}>
        <h1>{blockTitle}</h1>
        <div className={styles.inputs}>
          <input className={styles.email} type="text" placeholder={emailField.title} />
          <input className={styles.password} type="text" placeholder={passwordField.title} />
        </div>
        <a href="">{`${forgetPassword.Title}?`}</a>
        <label className={styles.label}>
          <input type={rememberMeField.type} />
          <span>{rememberMeField.title}</span>
        </label>
        <button className={styles.button}>{signInButton.title}</button>
        <div className={styles.register}>
          <p>{haveAccountText.title}</p>
          <a href="">{register.Title}</a>
        </div>
      </form> */}
    </div>
  )
}
