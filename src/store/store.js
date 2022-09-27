import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import searchSlice from './searchSlice';

export const store = configureStore({
  reducer: { search: searchSlice },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
  devTools: process.env.NODE_ENV === 'development',
});
