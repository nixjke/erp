import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

interface IFields {
  id: number
  type: string
  title: string
  hint: string
  isRequired: boolean
  defaultValue: string | string
  canEdit: boolean
  sortOrder: number
  value: string
  rel: null
}

interface IText {
  id: number | string
  type: string
  title: string
  hint: string
  sortOrder: number
}

interface ILinks {
  id: number
  icon: string
  title: string
  type: string
  routeUrl: string
  routeAction: string
  sortOrder: number
}

type Item = {
  user: null | string
  module: 'auth' | string
  properties: 'Signin' | string
  settings: {
    titleShort: string
    titleLong: string
    title: string
    timezone: string
    favicon: string
    logoUrl: string
    lang: string
    baseUrl: string
    Body: {
      background: string
      bgcolor: string
    }
  }
  data: {
    blocks: [
      {
        id: number
        BlockTitle: string
        Fields: IFields[]
        Texts: IText[]
      }
    ]
    Links: ILinks[]
    Buttons: [
      {
        id: number
        icon: string
        title: string
        type: string
        routeUrl: string
        routeAction: string
        sortOrder: number
      }
    ]
  }
}

interface InitialState {
  item: Item
  isLoading: boolean
}

const initialState: InitialState = {
  item: {
    user: null,
    module: 'auth',
    properties: 'Signin',
    settings: {
      titleShort: 'Система управления клиентами',
      titleLong: 'CRM',
      title: 'Войти в аккаунт',
      timezone: 'Europe/Moscow',
      favicon: '/upload/brand7ac55831c580eee0bc8513c34d82f068.png',
      logoUrl: '/upload/brand7ac55831c580eee0bc8513c34d82f067.png',
      lang: 'ru',
      baseUrl: 'site.ru',
      Body: {
        background: '/upload/background848f818896d42178d0e9fbcd4dfff40e.jpg',
        bgcolor: '#FFF',
      },
    },
    data: {
      blocks: [
        {
          id: 1,
          BlockTitle: 'Войти в аккаунт',
          Fields: [
            {
              id: 1,
              type: 'Email',
              title: 'Email',
              hint: 'Введите Email',
              isRequired: true,
              defaultValue: '',
              canEdit: true,
              sortOrder: 1,
              value: '',
              rel: null,
            },
            {
              id: 2,
              type: 'password',
              title: 'Пароль',
              hint: 'Введите Пароль',
              isRequired: true,
              defaultValue: '',
              canEdit: true,
              sortOrder: 2,
              value: '',
              rel: null,
            },
            {
              id: 3,
              type: 'checkbox',
              title: 'Запомнить меня',
              hint: '',
              isRequired: true,
              defaultValue: '',
              canEdit: true,
              sortOrder: 4,
              value: '',
              rel: null,
            },
          ],
          Texts: [
            {
              id: '1',
              type: 'Text',
              title: 'Еще нет аккаунта?',
              hint: '',
              sortOrder: 6,
            },
          ],
        },
      ],
      Links: [
        {
          id: 1,
          icon: '',
          title: 'Забыли пароль',
          type: 'Get',
          routeUrl: '/api/v2/auth/forgotPassword',
          routeAction: '',
          sortOrder: 3,
        },

        {
          id: 3,
          icon: '',
          title: 'Зарегистрируйтесь бесплатно',
          type: 'Get',
          routeUrl: '/api/v2/auth/RegisterFree',
          routeAction: '',
          sortOrder: 7,
        },
      ],
      Buttons: [
        {
          id: 2,
          icon: '',
          title: 'Войти',
          type: 'Post',
          routeUrl: '/api/v2/auth/login',
          routeAction: '',
          sortOrder: 5,
        },
      ],
    },
  },
  isLoading: false,
}

export const fetchContainer = createAsyncThunk('signin/fetchContainer', async () => {
  const response = await axios({
    method: 'GET',
    url: 'http://localhost:3001/auth',
  })
  return response.data
})

const signinSlice = createSlice({
  name: 'signin',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchContainer.fulfilled, (state, action) => {
      state.item = action.payload
      state.isLoading = true
    })
  },
})

export default signinSlice.reducer
