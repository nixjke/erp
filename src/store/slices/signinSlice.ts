import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export interface InitialState {
  items: []
  isLoading: boolean
}

const initialState: InitialState = {
  items: [],
  isLoading: false,
}
export const fetchContainer = createAsyncThunk('signin/fetchContainer', async () => {
  const response = await axios({
    method: 'GET',
    url: 'https://mso.mocklab.io/api/v2/auth/signin',
  })
  return response.data
})

const signinSlice = createSlice({
  name: 'signin',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchContainer.fulfilled, (state, action) => {
      state.items = action.payload
      state.isLoading = true
    })
  },
})

export default signinSlice.reducer
