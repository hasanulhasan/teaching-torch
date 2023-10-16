import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9000/v1/' }),
  tagTypes: ['Products', 'Orders', 'Feedback'],
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
    createUserInDB: builder.mutation({
      query: (data) => ({
        url: '/users/create-user',
        method: 'POST',
        body: data
      }),
    }),
    createOrder: builder.mutation({
      query: (data) => ({
        url: '/orders/create-order',
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['Orders']
    }),
    deleteOrder: builder.mutation({
      query: (id) => ({
        url: `/orders/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Orders']
    }),
    getReview: builder.query({
      query: () => ({
        url: '/feedbacks'
      }),
      providesTags: ['Feedback']
    }),
    postReview: builder.mutation({
      query: (data) => ({
        url: '/feedbacks/create-feedback',
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['Feedback']
    }),
    deleteReview: builder.mutation({
      query: (id) => ({
        url: `/feedbacks/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Feedback']
    }),
  }),
})

export const {useGetProductsQuery, useGetProductQuery, useGetOrdersQuery, usePostReviewMutation, useCreateUserInDBMutation, useCreateOrderMutation, useDeleteOrderMutation, useGetReviewQuery, useDeleteReviewMutation} = api;