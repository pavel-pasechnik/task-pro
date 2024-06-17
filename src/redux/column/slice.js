import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentColumn: {
    id: null,
    name: '',
  },
};

const columnSlice = createSlice({
  name: 'column',
  initialState,
  reducers: {
    setCurrentColumn(state, action) {
      state.currentColumn.id = action.payload.id;
      state.currentColumn.name = action.payload.name;
    },
    resetCurrentColumn(state) {
      state.currentColumn.id = null;
      state.currentColumn.name = '';
    },
  },
});

export const { setCurrentColumn, resetCurrentColumn } = columnSlice.actions;

export const selectCurrentColumn = state => state.column.currentColumn;

export default columnSlice.reducer;
