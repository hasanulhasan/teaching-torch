import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9000/v1/' }),
  tagTypes: ['Products', 'Orders'],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
      providesTags: ['Products']
    }),
    getProduct: builder.query({
      query: (id) => `/products/${id}`,
      providesTags: ['Products']
    }),
    getOrders: builder.query({
      query: () => '/orders',
      providesTags: ['Orders']
    }),
  }),
})

export const {useGetProductsQuery, useGetProductQuery, useGetOrdersQuery} = api;