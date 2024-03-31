import {configureStore} from '@reduxjs/toolkit';
import { getDefaultMiddleware } from '@reduxjs/toolkit';

import {
    persistStore,
    persistReducer,
  } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from './slice';

const persistConfig = {
    key: 'root',
    storage,
  };

const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
    //here reducer word is used, because we are combining all small reducer in one reducer.
    
    reducer: {
        cart: persistedReducer,
        //add other reducers
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

