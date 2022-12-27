import {   combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import taskSlice from './CrudSlice'
import  userSlice  from "./UserSlice";
const persistConfig = {
    key:"root",
    storage,
  } 

  const TwoReducer = combineReducers({
post: taskSlice,
user: userSlice
  })
export const persistedReducer = persistReducer(persistConfig, TwoReducer )

 export  const store = configureStore({
  reducer: persistedReducer,
 })
 export const persister = persistStore(store);