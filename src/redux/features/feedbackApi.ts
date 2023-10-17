import { api } from "./api";

export const feedbackApi = api.injectEndpoints({
  endpoints: (builder) => ({
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
      query: (id: string) => ({
        url: `/feedbacks/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Feedback']
    }),
  })
})

export const {usePostReviewMutation, useGetReviewQuery, useDeleteReviewMutation} = feedbackApi;