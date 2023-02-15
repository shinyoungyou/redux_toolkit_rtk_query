import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "car",
  initialState: {
    searchTerm: "",
    data: [],
  },
  reducers: {
    addCar(state, action) {
      state.data.push({
        id: nanoid(),
        name: action.payload.name,
        cost: action.payload.cost,
      });
    },
    removeCar(state, action) {
      state.data = state.data.filter((car) => car.id !== action.payload);
    },
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },
});

export const { addCar, removeCar, changeSearchTerm } = carsSlice.actions;

export default carsSlice.reducer;