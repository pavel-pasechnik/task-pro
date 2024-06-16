import { createSlice } from '@reduxjs/toolkit';
import fetchBoards from './boards.js';

const boardsSlice = createSlice({
  name: 'boards',
  initialState: {
    items: [],
    loading: false,
    error: null,
    currentBoard: null,
  },
  reducers: {
    setCurrentBoard: (state, action) => {
      state.currentBoard = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchBoards.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBoards.fulfilled, (state, action) => {
        state.loading = false;
        state.items = Array.isArray(action.payload) ? action.payload : [];

        if (state.items.length > 0) {
          state.currentBoard = state.items[0];
        }
      })
      .addCase(fetchBoards.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setCurrentBoard } = boardsSlice.actions;
export default boardsSlice.reducer;
