import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit'
import { signinApi } from './Signin/signinApi'

const rootReducer = combineReducers({
  [signinApi.reducerPath]: signinApi.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(signinApi.middleware)
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
