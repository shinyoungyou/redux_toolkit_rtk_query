import { createSlice } from '@reduxjs/toolkit';
import { reset } from '../actions';

const moviesSlice = createSlice({
  name: 'movie',
  initialState: [],
  reducers: {
    addMovie(state, action){
      state.push(action.payload);
    },
    removeMovie(state, action){
      // state.filter((song)=>song != action.payload);
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    }
  },
  extraReducers(bulider){
    bulider.addCase(reset, (action, state)=>{
      return [];
    })
  }
})

export const moviesReducer =  moviesSlice.reducer;
export const { addMovie, removeMovie } = moviesSlice.actions;
