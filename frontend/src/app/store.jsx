import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware), // Añade el middleware de RTK Query
});
