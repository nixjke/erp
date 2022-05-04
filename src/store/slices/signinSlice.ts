import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

interface InitialState {
  item: any
  isLoading: boolean
  isHeader: boolean
  isFooter: boolean
}

const initialState: InitialState = {
  item: {},
  isLoading: false,
  isHeader: false,
  isFooter: false,
}

export const fetchContainer = createAsyncThunk('signin/fetchContainer', async () => {
  const response = await axios({
    method: 'GET',
    url: 'http://localhost:3001/auth',
  })

  const formData = [
    ...response.data.data.blocks[0].Buttons,
    ...response.data.data.blocks[0].Fields,
    ...response.data.data.blocks[0].Texts,
    ...response.data.data.blocks[0].Links,
  ]

  formData.sort((a, b) => a.sortOrder - b.sortOrder)

  return {
    user: response.data.user,
    module: response.data.module,
    properties: response.data.properties,
    settings: response.data.settings,
    panels: response.data.panels,
    data: response.data.data,
    formData: formData,
    header: response.data.panels.header,
    isHeader: response.data.panels.header ? response.data.panels.header.type === 'Header' : false,
    footer: response.data.panels.footer,
    isFooter: response.data.panels.footer ? response.data.panels.footer.type === 'Footer' : false,
  }
})

const signinSlice = createSlice({
  name: 'signin',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchContainer.fulfilled, (state, action) => {
      state.item = action.payload
      state.isLoading = true
      state.isHeader = action.payload.isHeader
      state.isFooter = action.payload.isFooter
    })
  },
})

export default signinSlice.reducer
