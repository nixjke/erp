import React from 'react'

import { useForm, Controller } from 'react-hook-form'
import { useAuthMutation, useGetSigninQuery } from '../../../store/Signin/signinApi'

import Box from '../../../atoms/Box/Box'
import Button from '../../../atoms/Button/Button'
import Checkbox from '../../../atoms/Checkbox/Checkbox'
import Input from '../../../atoms/Input/Input'
import LinkTypography from '../../../atoms/LinkTypography/LinkTypography'
import Typography from '../../../atoms/Typography/Typography'

import s from './AuthForm.module.scss'
import { Link } from 'react-router-dom'

const AuthForm: React.FC = () => {
  const { data } = useGetSigninQuery()
  const [auth, { isError }] = useAuthMutation()

  const {
    control,
    formState: { isValid },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
  })

  const onSubmit = async (data: any) => {
    console.log(JSON.stringify(data))
    console.log(data)
    await auth({
      url: '/api/v2/auth/signin',
      body: {
        email: data.Email,
        password: data.Пароль,
      },
      method: 'POST',
    })
  }

  const errorMessage = ({ message_id, messages }: any) => {
    return messages.find((msg: any) => msg.id === message_id).text
  }

  const renderForm = (params: any) => {
    switch (params.component) {
      case 'input':
        return (
          <Controller
            key={params.sortOrder}
            name={params.title}
            control={control}
            defaultValue=''
            rules={{
              required: 'Необходимо заполнить поле',
              pattern: {
                message: errorMessage({
                  message_id: params.patterns.message_id,
                  messages: data?.data.Messages,
                }),
                value:
                  params.type === 'Email'
                    ? // eslint-disable-next-line no-control-regex
                      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
                    : /^\w{6,15}$/,
              },
            }}
            render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
              <Input
                style={params.styles}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                type={params.type}
                placeholder={params.hint}
                error={error}
                isValid={isValid}
              />
            )}
          />
        )
      case 'button':
        return (
          <Button style={params.styles} key={params.sortOrder}>
            {params.title}
          </Button>
        )
      case 'checkbox':
        return (
          <label style={{ display: 'flex', gap: '10px' }} key={params.sortOrder}>
            <Checkbox />
            <Typography>{params.title}</Typography>
          </label>
        )
      case 'text':
        return (
          <Typography key={params.sortOrder} variant='body1'>
            {params.title}
          </Typography>
        )
      case 'link':
        return (
          <Link style={{ textDecoration: 'none' }} to={params.URL} key={params.sortOrder}>
            <LinkTypography style={params.styles} size={params.size}>
              {params.title}
            </LinkTypography>
          </Link>
        )
      case 'hr':
        return <hr style={params.styles} key={params.sortOrder} />
      default:
        break
    }
  }

  return (
    <div className={s.signinForm}>
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography style={{ textAlign: 'center' }} variant='h3'>
            {data?.data.blocks.BlockTitle}
          </Typography>
          <span
            style={{
              fontSize: '16px',
              fontFamily: 'Montserrat',
              marginTop: '14px',
              color: '#eb5636',
            }}
          >
            {isError && <>Email or password is not correct</>}
          </span>
          {data?.data.blocks.Fields.map(field => field)
            .sort((a, b) => a.sortOrder - b.sortOrder)
            .map(field => renderForm(field))}
        </form>
      </Box>
    </div>
  )
}

export default AuthForm
