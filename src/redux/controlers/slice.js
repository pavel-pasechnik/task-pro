import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAddColumnOpen: false,
  isColumnEdit: false,
};

const controlersSlice = createSlice({
  name: 'controlers',
  initialState,
  reducers: {
    setIsAddColumnOpen(state, action) {
      state.isAddColumnOpen = action.payload;
    },
    setIsColumnEdit(state, action) {
      state.isColumnEdit = action.payload;
    },
  },
});

export const { setIsAddColumnOpen, setIsColumnEdit } = controlersSlice.actions;

export const selectIsAddColumnOpen = state => state.controlers.isAddColumnOpen;
export const selectIsColumnEdit = state => state.controlers.isColumnEdit;

export default controlersSlice.reducer;
