import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import showReducer from '../features/show/showSlice';
import lessonsReducer from '../features/lessons/lessonsSlice';

export default configureStore({
  reducer: {
    card: showReducer,
    lessons: lessonsReducer
  },
});
