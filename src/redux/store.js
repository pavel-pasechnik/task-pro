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
import boardsReducer from './boards/slice.js';
import filtersReducer from './filters/slice.js';
import controlersReducer from './controlers/slice.js';
import { configureStore } from '@reduxjs/toolkit';
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
    boards: boardsReducer,
    filters: filtersReducer,
    controlers: controlersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
