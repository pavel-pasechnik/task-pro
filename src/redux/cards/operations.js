import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://task-pro-backend-ehpy.onrender.com';

export const addCard = createAsyncThunk(
  'cards/addCard',
  async ({ columnId, values, priority, deadline }, thunkAPI) => {
    try {
      const response = await axios.post(`/api/boards/cards/${columnId}`, {
        ...values,
        priority,
        deadline,
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const updateCard = createAsyncThunk(
  'cards/updateCard',
  async ({ cardId, values, priority, deadline }, thunkAPI) => {
    try {
      const response = await axios.patch(`/api/boards/cards/${cardId}`, {
        ...values,
        priority,
        deadline,
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const deleteCard = createAsyncThunk('cards/deleteCard', async (cardId, thunkAPI) => {
  try {
    const response = await axios.delete(`/api/boards/cards/${cardId}`);

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
  }
});

export const fetchCard = createAsyncThunk('cards/fetchCard', async (columnId, thunkAPI) => {
  try {
    const response = await axios.get(`/api/boards/cards/${columnId}`);

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
  }
});

export const addColumn = createAsyncThunk(
  'cards/columnAdd',
  async ({ boardId, title }, thunkAPI) => {
    try {
      const response = await axios.post(`/api/boards/columns/${boardId}`, {
        title,
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);
