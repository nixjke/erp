import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

interface InitialState {
  item: any
  isLoading: boolean
}

const initialState: InitialState = {
  item: {},
  isLoading: false,
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
  console.log(response.data)

  formData.sort((a, b) => a.sortOrder - b.sortOrder)

  return {
    user: response.data.user,
    module: response.data.module,
    properties: response.data.properties,
    settings: response.data.settings,
    panels: response.data.panels,
    data: response.data.data,
    formData: formData,
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
    })
  },
})

export default signinSlice.reducer
