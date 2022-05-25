import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import Box from '../../../../atoms/Box/Box'
import Button from '../../../../atoms/Button/Button'
import Input from '../../../../atoms/Input/Input'
import Typography from '../../../../atoms/Typography/Typography'
import Header from '../../../../molecules/features/Header/Header'
import { usePlatformActivationStep3Query } from '../../../../store/Signin/signinApi'
import { PanelsPlatformActivation } from '../PanelsPlatformActivation'
import s from './Step3.module.scss'

const Step3: React.FC = () => {
  const { data } = usePlatformActivationStep3Query()

  const {
    control,
    formState: { isDirty },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
  })

  const renderForm = (params: any) => {
    switch (params.component) {
      case 'input':
        return (
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
        <div className={s.step3}>
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

export default Step3
