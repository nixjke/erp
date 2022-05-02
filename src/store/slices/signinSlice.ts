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
  try {
    const response = await axios({
      method: 'GET',
      url: 'http://localhost:3001/auth',
    })
    console.log(response.data)
    console.log({ response: response.data })
    return {
      response: response.data,
    }
  } catch (e) {
    console.log(e)
    return {}
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
