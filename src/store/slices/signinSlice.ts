import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  isLoading: false,
}

export const signinSlice = createSlice({
  name: 'signin',
  initialState,
  reducers: {},
})
