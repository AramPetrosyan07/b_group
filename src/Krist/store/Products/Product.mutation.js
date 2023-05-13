import { api } from './Product.slice';

export const createApi = api.injectEndpoints({
  endpoints: (builder) => ({
    setData: builder.mutation({
      query: (product) => ({
        body: product,
        method: 'POST',
        url: '/',
      }),
    }),
  }),
});
export const { useGetDataQuery } = createApi;
