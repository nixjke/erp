import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import Box from '../../../atoms/Box/Box'
import Button from '../../../atoms/Button/Button'
import Input from '../../../atoms/Input/Input'
import Typography from '../../../atoms/Typography/Typography'
import { useGetActivationQuery } from '../../../store/Signin/signinApi'
import s from './ActivationForm.module.scss'

const ActivationForm: React.FC = () => {
  const { data } = useGetActivationQuery()

  const {
    control,
    formState: { isDirty },
    handleSubmit,
    watch,
  } = useForm({
    mode: 'onBlur',
  })

  const onSubmit = (data: any) => {
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
                key={params.sortOrder}
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
                key={params.sortOrder}
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
      case 'input-phone':
        return (
          <div style={params.styles} key={params.sortOrder}>
            <Controller
              name={params.title}
              control={control}
              defaultValue=''
              rules={{ required: 'Заполните поле' }}
              render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                <PhoneInput
                  international
                  className={s.phoneInput}
                  placeholder={params.hint}
                  name='phoneInput'
                  value={value}
                  addInternationalOption={false}
                  defaultCountry='RU'
                  labels={{ ZZ: 'All', RU: 'RU', US: 'US' }}
                  countries={['RU', 'US']}
                  onChange={onChange}
                  onBlur={onBlur}
                />
              )}
            />
          </div>
        )

      case 'button':
        return (
          <Button style={params.styles} key={params.sortOrder}>
            {params.title}
          </Button>
        )
      case 'text':
        return (
          <Typography style={params.styles} key={params.sortOrder} variant='body2'>
            {params.title}
          </Typography>
        )
      default:
        break
    }
  }

  return (
    <div className={s.activation}>
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography style={{ textAlign: 'center' }} variant='h2'>
            {data?.data.blocks.BlockTitle}
          </Typography>
          {data?.data.blocks.Fields.map((field: any) => field)
            .sort((a: { sortOrder: number }, b: { sortOrder: number }) => a.sortOrder - b.sortOrder)
            .map((field: any) => renderForm(field))}
        </form>
      </Box>
    </div>
  )
}

export default ActivationForm
