import { baseQuery } from "./api";

export const dataApi = baseQuery.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (limit) => `/posts?_limit=${limit}`,
    }),
    getComments: builder.query({
      query: (postId) => `/posts/${postId}/comments`,
    }),
  }),
});

export const { useGetPostsQuery, useGetCommentsQuery } = dataApi;
