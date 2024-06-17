import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://task-pro-backend-ehpy.onrender.com';

const fetchBoards = createAsyncThunk('boards/fetchBoards', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/api/boards');

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export default fetchBoards;
