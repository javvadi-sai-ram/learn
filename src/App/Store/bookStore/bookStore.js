// redux/store.js
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import resumeReducer from '../../createSlice/createSlice.js';
import booksReducer from './bookreducer.js'

const store = configureStore({
  reducer: {
    saiResume: resumeReducer,
    books: booksReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
