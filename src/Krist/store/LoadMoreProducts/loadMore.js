import { createSlice } from '@reduxjs/toolkit';

export const loadMore = createSlice({
  name: 'loadMore',
  initialState: 8,
  reducers: {
    supplement: (state) => {
      return (state = state + 4);
    },
  },
});

export const { actions, reducer } = loadMore;
