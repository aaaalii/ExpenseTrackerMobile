// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';
import expenseReducer from './expenseSlice';

// Configure persistence
const persistConfig = {
  key: 'root',
  storage, // Use AsyncStorage as the storage mechanism
};

const persistedReducer = persistReducer(persistConfig, expenseReducer);

const store = configureStore({
  reducer: {
    expense: persistedReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
