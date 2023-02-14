import { configureStore, createAction } from '@reduxjs/toolkit';
import { songsReducer } from './slices/songsSlice';
import { moviesReducer } from './slices/moviesSlice';

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer
  }
})

export const reset = createAction('app/reset');

export { store };