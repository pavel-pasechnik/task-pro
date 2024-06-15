import { createSlice } from '@reduxjs/toolkit';
import { fetchBoards } from './boards.js';

const boardsSlice = createSlice({
  name: 'boards',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchBoards.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBoards.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchBoards.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default boardsSlice.reducer;
