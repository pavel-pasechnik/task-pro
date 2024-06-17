import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://task-pro-backend-ehpy.onrender.com';

export const addColumn = createAsyncThunk(
  'columns/addColumn',
  async ({ boardId, title }, thunkAPI) => {
    try {
      const response = await axios.post(`/api/boards/columns/${boardId}`, { title });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const updateColumn = createAsyncThunk(
  'columns/updateColumn',
  async ({ columnId, title }, thunkAPI) => {
    try {
      const response = await axios.put(`/api/boards/columns/${columnId}`, { title });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);
