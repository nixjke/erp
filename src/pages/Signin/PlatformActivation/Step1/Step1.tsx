import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import PhoneInput from 'react-phone-number-input'
import Box from '../../../../atoms/Box/Box'
import Button from '../../../../atoms/Button/Button'
import Input from '../../../../atoms/Input/Input'
import Typography from '../../../../atoms/Typography/Typography'
import Header from '../../../../molecules/features/Header/Header'
import { PanelsPlatformActivation } from '../PanelsPlatformActivation'
import { usePlatformActivationStep1Query } from '../../../../store/Signin/signinApi'
import s from './Step1.module.scss'

const Step1: React.FC = () => {
  const { data } = usePlatformActivationStep1Query()

  console.log(data?.panels.map((el: any) => el))

  const {
    control,
    formState: { isDirty },
    handleSubmit,
    watch,
  } = useForm({
    mode: 'onBlur',
  })

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
      case 'input-phone':
        return (
          <div style={params.styles} key={params.sortOrder}>
            <Controller
              name={params.title}
              control={control}
              key={params.sortOrder}
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

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <div className={s.step}>
      <div>
        <Header logo='' name='' PlatformActivation>
          {data?.panels.map((el: any) => (
            <div style={el.styles} key={el.id}>
              {el.Name}
            </div>
          ))}
        </Header>
        <div className={s.step1}>
          <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Typography style={{ textAlign: 'center' }} variant='h2'>
                {data?.data.blocks.BlockTitle}
              </Typography>
              {data?.data.blocks.Fields.map((field: any) => field)
                .sort(
                  (a: { sortOrder: number }, b: { sortOrder: number }) => a.sortOrder - b.sortOrder
                )
                .map((field: any) => renderForm(field))}
            </form>
          </Box>
        </div>
      </div>
      <PanelsPlatformActivation>
        <Typography variant='h2'>{data?.AdPanel.Name}</Typography>
        <ul>
          {data?.AdPanel.Body.map((el: any) => (
            <li key={el}>{el}</li>
          ))}
        </ul>
      </PanelsPlatformActivation>
    </div>
  )
}

export default Step1
