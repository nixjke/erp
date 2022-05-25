import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import Box from '../../../atoms/Box/Box'
import Button from '../../../atoms/Button/Button'
import Input from '../../../atoms/Input/Input'
import Typography from '../../../atoms/Typography/Typography'
import { useSetNewPasswordQuery } from '../../../store/Signin/signinApi'
import s from './SetNewPassword.module.scss'

const SetNewPassword: React.FC = () => {
  const { data } = useSetNewPasswordQuery()
  console.log(data)

  const {
    control,
    formState: { isValid },
    handleSubmit,
    watch,
  } = useForm({
    mode: 'onBlur',
  })

  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data))
    console.log(data)
  }

  const renderForm = (params: any) => {
    switch (params.component) {
      case 'input':
        return params.name === 'password-repeat' ? (
          <Controller
            key={params.sortOrder}
            name={params.name}
            control={control}
            defaultValue=''
            rules={{
              required: 'Заполните поле',
              validate: value => {
                if (value === watch('password')) {
                  return true
                } else {
                  return 'Пароли не совпадают'
                }
              },
            }}
            render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
              <Input
                type={params.type}
                placeholder={params.hint}
                style={params.styles}
                prompt={params.prompt}
                error={error}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
          />
        ) : (
          <Controller
            key={params.sortOrder}
            name={params.name}
            control={control}
            defaultValue=''
            rules={{ required: 'Заполните поле' }}
            render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
              <Input
                type={params.type}
                placeholder={params.hint}
                style={params.styles}
                prompt={params.prompt}
                error={error}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
          />
        )
      case 'button':
        return (
          <Button key={params.sortOrder} style={params.styles}>
            {params.title}
          </Button>
        )
      default:
        break
    }
  }

  return (
    <div className={s.newPass}>
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography style={{ textAlign: 'center' }} variant='h2'>
            Задайте новый пароль
          </Typography>
          {data?.data.blocks.Fields.map((field: any) => field)
            .sort((a: any, b: any) => a.sortOrder - b.sortOrder)
            .map((field: any) => renderForm(field))}
        </form>
      </Box>
    </div>
  )
}

export default SetNewPassword
