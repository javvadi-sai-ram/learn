import { configureStore } from '@reduxjs/toolkit';
import resumeReducer from '../createSlice/createSlice';

const store = configureStore({
  reducer: {
    saiResume: resumeReducer,
  },
});

export default store;
