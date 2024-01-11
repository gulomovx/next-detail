'use client'
import cartReducer from './itemSlice'
import { configureStore } from "@reduxjs/toolkit"
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit'
const persistConfig = {
    key: "root",
    // version: 1,
    storage,
};
const reducer = combineReducers({
    counter: cartReducer,
});
const persistedReducer = persistReducer(persistConfig, reducer);
export const store = configureStore({
    reducer: persistedReducer,
  });
  
  export default store;
// export const store = configureStore({
//     reducer: {
//         counter: cartReducer,
        
//     },
//  })