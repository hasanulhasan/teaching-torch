import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://teaching-torch-backend-n6njmqvxh-hasanulhasan.vercel.app/v1' }),
  tagTypes: ['Products', 'Orders', 'Feedback', 'User'],
  endpoints: (builder) => ({}),
})