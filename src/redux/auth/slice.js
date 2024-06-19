import {
  login,
  logout,
  refreshUser,
  register,
  updateUser,
  changeTheme,
  sendHelp,
} from './operations.js';
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
      theme: 'light',
      avatarURL: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder =>
    builder
      .addCase(register.pending, state => {
        state.isLoggedIn = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, state => {
        state.isLoggedIn = false;
      })
      .addCase(login.pending, state => {
        state.isLoggedIn = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, state => {
        state.isLoggedIn = false;
      })
      .addCase(logout.pending, state => {
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, state => {
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logout.rejected, state => {
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(changeTheme.pending, state => {
        state.isLoading = true;
      })
      .addCase(changeTheme.fulfilled, (state, { payload }) => {
        state.user.theme = payload.theme;
        state.isLoading = false;
      })
      .addCase(changeTheme.rejected, state => {
        state.isLoading = false;
      })
      .addCase(updateUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.user = payload; // Оновлено збереження даних користувача
        state.isLoading = false;
      })
      .addCase(updateUser.rejected, state => {
        state.isLoading = false;
      })
      .addCase(sendHelp.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(sendHelp.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(sendHelp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export default authSlice.reducer;
