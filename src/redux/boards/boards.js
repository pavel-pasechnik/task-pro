import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://task-pro-backend-ehpy.onrender.com/api/boards';

export const fetchBoards = createAsyncThunk(
  'boards/fetchBoards',
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const token = state.auth.token;

      const response = await axios.get(axios.defaults.baseURL, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const boardsSlice = createSlice({
  name: 'boards',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchBoards.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBoards.fulfilled, (state, action) => {
        state.loading = false;
        state.boards = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(fetchBoards.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default boardsSlice.reducer;
