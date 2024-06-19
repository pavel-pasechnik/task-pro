import { createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line n/no-missing-import
import { addCard, deleteCard, fetchCard, updateCard } from './operations';

const initialState = {
  cards: [],
  currentCard: null,
  isLoading: false,
  error: null,
  isAddCardOpen: false,
  isEditCardOpen: false,
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setIsAddCardOpen: (state, action) => {
      state.isAddCardOpen = action.payload;
    },
    setIsEditCardOpen: (state, action) => {
      state.isEditCardOpen = action.payload;
    },
    setCurrentCard: (state, action) => {
      state.currentCard = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(addCard.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cards.push(action.payload);
      })
      .addCase(addCard.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateCard.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateCard.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.cards.findIndex(card => card.id === action.payload.id);

        if (index !== -1) {
          state.cards[index] = action.payload;
        }
      })
      .addCase(updateCard.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteCard.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cards = state.cards.filter(card => card.id !== action.payload.id);
      })
      .addCase(deleteCard.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchCard.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cards = action.payload;
      })
      .addCase(fetchCard.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setIsAddCardOpen, setIsEditCardOpen, setCurrentCard } = cardsSlice.actions;
export default cardsSlice.reducer;
