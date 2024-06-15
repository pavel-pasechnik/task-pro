import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://task-pro-backend-ehpy.onrender.com/api/users';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk('/register', async (userInfo, thunkAPI) => {
  try {
    console.log(axios);
    const response = await axios.post('/register', userInfo);

    setAuthHeader(response.data.token);
    console.log(response.data);

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const login = createAsyncThunk('/login', async (userInfo, thunkAPI) => {
  try {
    const response = await axios.post('/login', userInfo);

    setAuthHeader(response.data.token);

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const response = await axios.post('/users/logout');

    clearAuthHeader();

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const reduxState = thunkAPI.getState();
    const savedToken = reduxState.auth.token;

    // Add it to the HTTP header and perform the request
    setAuthHeader(savedToken);
    const response = await axios.get('/users/current');

    return response.data;
  },
  {
    condition: (_, { getState }) => {
      // Reading the token from the state via getState()
      const reduxState = getState();
      const savedToken = reduxState.auth.token;

      // If there is no token, exit without performing any request
      return savedToken !== null;
    },
  }
);
