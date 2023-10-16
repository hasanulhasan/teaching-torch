
import IProduct from '@/Types';
import IOrder from '@/Types';
import IUser from '@/Types';
import IFeedback from '@/Types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface PostData {
  id: string | undefined
  data: any
}

interface IProductData {
  success: string;
  data: IProduct;
}

interface IOrderData {
  success: string;
  data: IOrder;
}
interface IUserData {
  success: string;
  data: IUser
}
interface IFeedbackData {
  success: string;
  data: IFeedback
}



export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://teaching-torch-backend-n6njmqvxh-hasanulhasan.vercel.app/v1' }),
  tagTypes: ['Products', 'Orders', 'Feedback', 'User'],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
      providesTags: ['Products']
    }),
    getUsers: builder.query({
      query: () => '/users',
      providesTags: ['User']
    }),
    getProduct: builder.query<IProductData, string>({
      query: (id: string) => `/products/${id}`,
      providesTags: ['Products']
    }),
    getOrders: builder.query({
      query: () => '/orders',
      providesTags: ['Orders']
    }),
    createUserInDB: builder.mutation({
      query: (data:IUser) => ({
        url: '/users/create-user',
        method: 'POST',
        body: data
      }),
    }),
    createOrder: builder.mutation({
      query: (data: IOrder) => ({
        url: '/orders/create-order',
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['Orders']
    }),
    deleteUser: builder.mutation({
      query: (id:string) => ({
        url: `/users/${id}`,
        method: 'POST'
      }),
      invalidatesTags: ['User']
    }),
    deleteOrder: builder.mutation({
      query: (id: string) => ({
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
      query: (data: IFeedback) => ({
        url: '/feedbacks/create-feedback',
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['Feedback']
    }),
    deleteReview: builder.mutation({
      query: (id: string) => ({
        url: `/feedbacks/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Feedback']
    }),
  }),
})

export const {useGetProductsQuery, useGetProductQuery, useGetOrdersQuery, usePostReviewMutation, useCreateUserInDBMutation, useCreateOrderMutation, useDeleteOrderMutation, useGetReviewQuery, useDeleteReviewMutation, useGetUsersQuery, useDeleteUserMutation} = api;