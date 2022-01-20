import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';

// import storage from 'redux-persist/lib/storage';
import contactsReducer from './contacts/contactSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

// console.log('persistConfig', persistConfig);
// const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
});

// export const persistor = persistStore(store);
export default store;
