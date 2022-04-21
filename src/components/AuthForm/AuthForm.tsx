import React from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../store/redux-hooks'
import { fetchContainer } from '../../store/slices/siginSlice/signinSlice'
import s from './AuthForm.module.scss'

export default function AuthForm() {
  const dispath = useDispatch()
  const signin = useAppSelector(store => store.signin.item)

  const items = [1, 2, 3, 4]
  const items1 = [1, 2, 3, 4]
  const items2 = [1, 2, 3, 4]

  React.useEffect(() => {
    dispath(fetchContainer())
  }, [])

  return (
    <div className={s.authForm}>
      <form className={s.form}>
        <h1>{signin.data.blocks[0].BlockTitle}</h1>
        <div className={s.inputs}>
          <input className={s.email} type="text" placeholder="Email" />
          <input className={s.password} type="text" placeholder="Пароль" />
        </div>
        <a href="">{signin.data.Links[0].Title}</a>
        <label className={s.label}>
          <input type="checkbox" />
          <span>{signin.data.blocks[0].Fields[2].title}</span>
        </label>
        <button className={s.button}>{signin.data.Buttons[0].title}</button>
        <div className={s.register}>
          <p>{signin.data.blocks[0].Texts[0].title}</p>
          <a href="">{signin.data.Links[1].Title}</a>
        </div>
      </form>
      {
        items.map(item => {
          <p>{items}</p>
        })
      }
    </div>
  )
}
