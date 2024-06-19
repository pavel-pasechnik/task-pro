import { createSlice } from '@reduxjs/toolkit';
import { fetchBoards, deleteBoard, updateBoard, addBoard } from './actions.js';

const boardsSlice = createSlice({
  name: 'boards',
  initialState: {
    current: {},
    items: [],
    backgrounds: [],
    loading: false,
    error: null,
    currentBoard: null, // to delete
  },
  reducers: {
    setCurrentBoard: (state, action) => {
      state.currentBoard = action.payload;
    },
    setActiveBoard(state, action) {
      state.boards.current = action.payload;
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
      .addCase(addBoard.pending, state => {
        state.boards.isLoading = true;
      })
      .addCase(addBoard.fulfilled, (state, action) => {
        state.boards.isLoading = false;
        state.boards.error = null;
        state.boards.items.push(action.payload);
      })
      .addCase(addBoard.rejected, (state, action) => {
        state.boards.isLoading = false;
        state.boards.error = action.payload;
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

export const { setActiveBoard, setCurrentBoard } = boardsSlice.actions;
export default boardsSlice.reducer;
