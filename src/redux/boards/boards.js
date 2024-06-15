import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://task-pro-backend-ehpy.onrender.com';

export const fetchBoards = createAsyncThunk('boards/fetchBoards', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/api/boards');

    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
