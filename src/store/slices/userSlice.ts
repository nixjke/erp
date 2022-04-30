import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: null,
  accessToken: null,
  id: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email
      state.accessToken = action.payload.accessToken
      state.id = action.payload.id
    },
  },
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
