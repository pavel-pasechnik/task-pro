import { createSlice } from '@reduxjs/toolkit';
import { fetchBoards, deleteBoard, updateBoard } from './actions.js';

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
      })
      .addCase(deleteBoard.fulfilled, (state, action) => {
        state.items = state.items.filter(board => board._id !== action.payload);

        if (state.currentBoard && state.currentBoard._id === action.payload) {
          state.currentBoard = state.items.length > 0 ? state.items[0] : null;
        }
      })
      .addCase(updateBoard.fulfilled, (state, action) => {
        const index = state.items.findIndex(board => board._id === action.payload._id);

        if (index !== -1) {
          state.items[index] = action.payload;
        }

        if (state.currentBoard && state.currentBoard._id === action.payload._id) {
          state.currentBoard = action.payload;
        }
      });
  },
});

export const { setCurrentBoard } = boardsSlice.actions;
export default boardsSlice.reducer;
