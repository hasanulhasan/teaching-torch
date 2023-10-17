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

  })
})

export const { useGetProductsQuery, useGetProductQuery} = productApi;