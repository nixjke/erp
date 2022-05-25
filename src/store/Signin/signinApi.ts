import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Signin {
  module: string
  data: {
    Messages: [{ id: number; text: string }]
    blocks: { BlockTitle: string; Fields: [{ sortOrder: number }] }
  }
  settings: {
    Body: {
      background: string
      bgcolor: string
    }
  }
}

export const signinApi = createApi({
  reducerPath: 'signinApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://89.108.106.147:8000',
  }),
  endpoints: build => ({
    getSignin: build.query<Signin, void>({
      query: () => `/api/v2/auth/signin`,
    }),
    getActivation: build.query<any, void>({
      query: () => `/api/v2/auth/activation`,
    }),
    setNewPassword: build.query<any, void>({
      query: () => `/api/v2/auth/set-new-password`,
    }),
    recoveryEmail: build.query<any, void>({
      query: () => `/api/v2/auth/recovery-email`,
    }),
    PlatformActivationStep1: build.query<any, void>({
      query: () => `/api/v2/auth/platform_activation_step1`,
    }),
    PlatformActivationStep2: build.query<any, void>({
      query: () => `/api/v2/auth/platform_activation_step2`,
    }),
    PlatformActivationStep3: build.query<any, void>({
      query: () => `/api/v2/auth/platform_activation_step3`,
    }),
    auth: build.mutation({
      query: ({ url, body, method = 'POST' }) => ({
        url: url,
        method: method,
        body,
      }),
    }),
  }),
})

export const {
  useGetSigninQuery,
  useAuthMutation,
  useGetActivationQuery,
  useSetNewPasswordQuery,
  useRecoveryEmailQuery,

  usePlatformActivationStep1Query,
  usePlatformActivationStep2Query,
  usePlatformActivationStep3Query,
} = signinApi
