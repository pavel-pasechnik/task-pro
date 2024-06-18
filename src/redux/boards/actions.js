import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://task-pro-backend-ehpy.onrender.com';

export const fetchBoards = createAsyncThunk('boards/fetchBoards', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/api/boards');

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteBoard = createAsyncThunk('boards/deleteBoard', async (boardId, thunkAPI) => {
  try {
    await axios.delete(`/api/boards/${boardId}`);

    return boardId;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateBoard = createAsyncThunk(
  'boards/updateBoard',
  async (updatedBoard, thunkAPI) => {
    try {
      const response = await axios.put(`/api/boards/${updatedBoard._id}`, updatedBoard);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
