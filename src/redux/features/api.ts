import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import { IBook, IUser } from '../../components/types/globalTypes';

// interface PostData {
//   id: string | undefined
//   data: any
// }

// interface IData {
//   success: string;
//   data: IBook;
// }

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9000/v1/' }),
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
      providesTags: ['Products']
    }),
    getProduct: builder.query({
      query: (id) => `/products/${id}`,
      providesTags: ['Products']
    })
  }),
})

export const {useGetProductsQuery, useGetProductQuery} = api;