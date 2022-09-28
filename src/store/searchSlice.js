import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as searchApi from '@api/searchApi';
import { CacheStorage } from '@utils/cacheStorage';

const initialState = { searchData: [], isFetching: false };

export const fetchList = createAsyncThunk(
  'search/getlist',
  async (keyword, { rejectWithValue }) => {
    try {
      const cacheStorage = new CacheStorage(keyword);
      const cachedData = await cacheStorage.get();

      if (cachedData) {
        return cachedData;
      }

      const response = await searchApi.getSearchList(keyword);
      await cacheStorage.add(keyword);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  },
);

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchList.pending, state => {
      state.isFetching = true;
    });
    builder.addCase(fetchList.fulfilled, (state, action) => {
      state.searchData = action.payload;
      state.isFetching = false;
    });
    builder.addCase(fetchList.rejected, state => {
      state.isFetching = false;
    });
  },
});

export default searchSlice.reducer;
