/* eslint-disable n/no-missing-import */
import { addColumn, updateColumn, deleteColumn, fetchColumn } from './operation';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  columns: [],
  currentColumn: null,
  isAddColumnOpen: false,
  isEditColumnOpen: false,
  isLoading: false,
  error: null,
};

const controlersSlice = createSlice({
  name: 'controlers',
  initialState,
  reducers: {
    setIsAddColumnOpen: (state, action) => {
      state.isAddColumnOpen = action.payload;
    },
    setIsEditColumnOpen: (state, action) => {
      state.isEditColumnOpen = action.payload;
    },
    setCurrentColumn: (state, action) => {
      state.isEditColumnOpen = action.payload;
    },
  extraReducers: builder => {
    builder
      .addCase(addColumn.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addColumn.fulfilled, (state, action) => {
        state.columns.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addColumn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateColumn.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateColumn.fulfilled, (state, action) => {
        const index = state.columns.findIndex(column => column.id === action.payload.id);

        if (index !== -1) {
          state.columns[index] = action.payload;
        }

        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateColumn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteColumn.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteColumn.fulfilled, (state, action) => {
        state.columns = state.columns.filter(column => column.id !== action.payload.id);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteColumn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchColumn.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchColumn.fulfilled, (state, action) => {
        state.columns = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchColumn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setIsAddColumnOpen, setIsEditColumnOpen, setCurrentColumn } = controlersSlice.actions; // Експортуємо новий екшен
export default controlersSlice.reducer;
