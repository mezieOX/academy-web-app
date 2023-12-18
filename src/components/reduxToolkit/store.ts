import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface IBook {
  id: number;
  title: string;
  author: string;
  cover_image: string;
}

export const booksApi = createApi({
  reducerPath: "books",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://freetestapi.com/api/v1",
  }),
  endpoints(build) {
    return {
      getBooks: build.query<IBook[], string>({
        query: (someString) => "/books" + someString,
      }),
    };
  },
});

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [booksApi.reducerPath]: booksApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

export const { useGetBooksQuery } = booksApi;
