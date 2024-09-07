// redux/reducers/index.js
import { combineReducers } from 'redux';
import booksReducer from './bookreducer.js';
import resumeSlice from '../../createSlice/createSlice.js'

const rootReducer = combineReducers({
  books: booksReducer,
  saiResume: resumeSlice
});

export default rootReducer;
