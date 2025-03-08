import { baseQuery } from "./api";

export const dataApi = baseQuery.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({ query: () => "/posts" }),
    getComments: builder.query({
      query: (postId) => `/posts/${postId}/comments`,
    }),
  }),
});

export const { useGetPostsQuery, useGetCommentsQuery } = dataApi;
