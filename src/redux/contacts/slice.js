import { addContact, deleteContact, fetchContacts } from './operations.js';
import { createSlice } from '@reduxjs/toolkit';
import { logout } from '../auth/operations.js';

const slice = createSlice({
  name: 'contacts',
  initialState: { items: [], loading: false, error: null },

  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, state => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteContact.pending, state => {
        state.error = false;
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(contacts => contacts.id !== action.payload.id);
      })
      .addCase(deleteContact.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      .addCase(addContact.pending, state => {
        state.error = false;
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      .addCase(logout.pending, state => {
        state.error = false;
        state.loading = true;
      })
      .addCase(logout.fulfilled, state => {
        state.contacts = [];
        state.error = null;
        state.loading = false;
      })
      .addCase(logout.rejected, state => {
        state.loading = false;
        state.error = true;
      }),
});

export default slice.reducer;
