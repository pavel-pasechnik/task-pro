import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAddColumnOpen: false,
  isEditColumnOpen: false,
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
  },
});

export const { setIsAddColumnOpen, setIsEditColumnOpen } = controlersSlice.actions; // Експортуємо новий екшен

export default controlersSlice.reducer;
