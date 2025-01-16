import { configureStore } from '@reduxjs/toolkit';
import aiReducer from './aiSlice';

const store = configureStore({
  reducer: {
    ai: aiReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
