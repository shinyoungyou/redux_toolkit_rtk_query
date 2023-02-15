import { createSlice } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "car",
  initialState: {
    index: 1,
    searchTerm: "",
    totalCost: 0,
    cars: [],
  },
  reducers: {
    addCar(state, action) {
      state.cars.push({
        id: state.index,
        name: action.payload.name,
        cost: parseInt(action.payload.cost),
      });
      state.index++;
      state.totalCost = state.cars.map((car) => {
        let tmpCost = 0;
        tmpCost = parseInt(tmpCost) + parseInt(car.cost);
        return parseInt(tmpCost);
      });
    },
    removeCar(state, action) {
      state.cars = state.cars.filter((car) => car.id !== action.payload);
      state.totalCost = state.cars.map((car) => {
        let tmpCost = 0;
        tmpCost = parseInt(tmpCost) + parseInt(car.cost);
        return parseInt(tmpCost);
      });
    },
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },
});

export const { addCar, removeCar, changeSearchTerm } = carsSlice.actions;

export default carsSlice.reducer;

// carState = {
//   index: 1,
//   searchTerm: '',
//   totalCost: 0,
//   cars: [
//     {
//       id: 1,
//       name: 'car1',
//       cost: 3000
//     },
//     {
//       id: 2,
//       name: 'car2',
//       cost: 2000
//     }
//   ]
// }
