import { api } from "./api";
import IProduct from '@/Types';
interface IProductData {
  success: string;
  data: IProduct;
}

export const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
      providesTags: ['Products']
    }),
    getProduct: builder.query<IProductData, string>({
      query: (id: string) => `/products/${id}`,
      providesTags: ['Products']
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Products']
    }),
    editProduct: builder.mutation({
      query: ({id, data}) => ({
        url: `/products/${id}`,
        method: 'PATCH',
        body: data
      }),
      invalidatesTags: ['Products']
    })
  })
})

export const { useGetProductsQuery, useGetProductQuery, useEditProductMutation, useDeleteProductMutation} = productApi;