import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { advertReducer } from './adverts/advertsSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favoriteAdverts'],
};

const persistedAdvertsReducer = persistReducer(persistConfig, advertReducer);

const rootReducer = combineReducers({
  adverts: persistedAdvertsReducer,
});

export default rootReducer;
