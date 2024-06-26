import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://task-pro-backend-ehpy.onrender.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk('auth/register', async (userInfo, thunkAPI) => {
  try {
    const response = await axios.post('api/users/register', userInfo);

    setAuthHeader(response.data.token);

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const login = createAsyncThunk('auth/login', async (userInfo, thunkAPI) => {
  try {
    const response = await axios.post('api/users/login', userInfo);

    setAuthHeader(response.data.token);

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const response = await axios.post('api/users/logout');

    clearAuthHeader();

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  '/current',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const reduxState = thunkAPI.getState();
    const savedToken = reduxState.auth.token;

    // Add it to the HTTP header and perform the request
    setAuthHeader(savedToken);
    const response = await axios.get('api/users/current');

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

export const updateUser = createAsyncThunk('/update', async (userInfo, thunkAPI) => {
  try {
    const response = await axios.patch('api/users', userInfo);

    setAuthHeader(response.data.token);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const changeTheme = createAsyncThunk('/theme', async (userTheme, thunkAPI) => {
  try {
    const response = await axios.patch('api/users/themes', userTheme);
    const { theme } = response.data;

    localStorage.setItem('theme', theme);

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const sendHelp = createAsyncThunk('/help', async ({ email, comment }, thunkAPI) => {
  try {
    const response = await axios.post('api/users/help', { email, comment });

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
