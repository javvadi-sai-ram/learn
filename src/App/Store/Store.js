import { configureStore } from '@reduxjs/toolkit';
import resumeReducer from '../createSlice/createSlice';

//that wrong i Did

const store = configureStore({
  reducer: {
    saiResume: resumeReducer,
  },
});

export default store;
