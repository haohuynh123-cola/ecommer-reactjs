import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import AppReducer from './AppReducer';

// Configure the persist options
const persistConfig = {
  key: 'app',
  storage,
  whitelist: ['cartItems', 'totalPrice'],
};

// Create the persisted reducer
const persistedReducer = persistReducer(persistConfig, AppReducer);

// Create the store
const store = createStore(persistedReducer);
const persistor = persistStore(store);

// export default rootReducers;
export { store, persistor };