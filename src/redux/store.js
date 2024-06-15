import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import authReducer from './auth/slice.js';
import boardsReducer from './boards/boards.js';
import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/slice.js';
import filtersReducer from './filters/slice.js';
// eslint-disable-next-line n/no-missing-import
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'authSlice',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    contacts: contactsReducer,
    filters: filtersReducer,
    boards: boardsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// export const store = configureStore({
//   reducer: { contacts: contactsReducer, filters: filtersReducer },
// });
