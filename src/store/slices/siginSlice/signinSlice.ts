import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { initialState } from './initialState'
import axios from 'axios'

export const fetchContainer = createAsyncThunk('signin/fetchContainer', async () => {
  const response = await axios({
    method: 'GET',
    // url: 'https://mso.mocklab.io/api/v2/auth/signin',
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
