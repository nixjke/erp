import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit'
import signinSlice from './slices/signinSlice'
import userSlice from './slices/userSlice'

const rootReducer = combineReducers({
  signin: signinSlice,
  authorization: userSlice,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
