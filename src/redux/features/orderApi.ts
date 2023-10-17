import { api } from "./api";

export const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: () => '/orders',
      providesTags: ['Orders']
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
      query: (id: string) => ({
        url: `/orders/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Orders']
    })

  })
})

export const { useGetOrdersQuery,useCreateOrderMutation, useDeleteOrderMutation, } = productApi;