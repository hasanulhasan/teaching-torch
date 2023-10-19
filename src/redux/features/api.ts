import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9000/v1' }),
  tagTypes: ['Products', 'Orders', 'Feedback', 'User'],
  endpoints: (builder) => ({}),
})