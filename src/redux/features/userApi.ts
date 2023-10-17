import { api } from "./api";

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users',
      providesTags: ['User']
    }),
    
    createUserInDB: builder.mutation({
      query: (data) => ({
        url: '/users/create-user',
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['User']
    }),
   
    deleteUser: builder.mutation({
      query: (id:string) => ({
        url: `/users/${id}`,
        method: 'POST'
      }),
      invalidatesTags: ['User']
    }),
  })
})

export const {useGetUsersQuery, useCreateUserInDBMutation, useDeleteUserMutation} = userApi;