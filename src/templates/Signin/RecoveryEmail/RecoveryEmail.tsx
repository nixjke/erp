import React from 'react'
import s from './RecoveryEmail.module.scss'
import Box from '../../../atoms/Box/Box'
import Input from '../../../atoms/Input/Input'

import { Link, useNavigate } from 'react-router-dom'
import { useRecoveryEmailQuery } from '../../../store/Signin/signinApi'
import { Controller, useForm } from 'react-hook-form'
import Typography from '../../../atoms/Typography/Typography'
import Button from '../../../atoms/Button/Button'
import LinkTypography from '../../../atoms/LinkTypography/LinkTypography'

const RecoveryEmail: React.FC = () => {
  const { data } = useRecoveryEmailQuery()
  const navigate = useNavigate()

  const {
    control,
    formState: { isValid },
    handleSubmit,
    watch,
  } = useForm({
    mode: 'onBlur',
  })

  const onSubmit = (data: any) => {
    console.log(data)
  }

  const errorMessage = ({ message_id, messages }: any): string => {
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
                  message_id: params.pattern.message_id,
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
      case 'text':
        return (
          <Typography style={params.styles} key={params.sortOrder} variant='body1'>
            {params.title}
          </Typography>
        )
      case 'button':
        return (
          <Button style={params.styles} key={params.sortOrder}>
            {params.title}
          </Button>
        )
      case 'link':
        return (
          <div style={params.styles}>
            <Link key={params.sortOrder} to='/' style={{ textDecoration: 'none' }}>
              <LinkTypography size={params.size}>{params.title}</LinkTypography>
            </Link>
          </div>
        )
      default:
        break
    }
  }

  return (
    <div className={s.restPassword}>
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography style={{ textAlign: 'center' }} variant='h2'>
            Забыли пароль?
          </Typography>

          {data?.data.blocks.Fields.map((field: any) => field)
            .sort((a: any, b: any) => a.sortOrder - b.sortOrder)
            .map((field: any) => renderForm(field))}

          {/* <div>
            <Typography style={{ marginTop: '10px' }} variant='body2'>
              Введите Email и мы отправим вам письмо со ссылкой для сброса пароля
            </Typography>
          </div>
          <Input style={{ marginTop: '38px' }} placeholder='Email' />
          <Button style={{ marginTop: '40px' }}>ОТПРАВИТЬ</Button>
          <Link style={{ textAlign: 'center', textDecoration: 'none', marginTop: '38px' }} to='/'>
            <LinkTypography>Вернуться назад</LinkTypography>
          </Link> */}
        </form>
      </Box>
    </div>
  )
}

export default RecoveryEmail
