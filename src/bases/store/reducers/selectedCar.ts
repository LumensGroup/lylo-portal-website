import { createSlice } from "@reduxjs/toolkit";

interface CarState {
  selectedCar: Record<string, any>;
}

const initialState: CarState = {
  selectedCar: {},
};

const carReducer = createSlice({
  name: "carReducer",
  initialState,
  reducers: {
    selectCar: (state, action) => {
      state.selectedCar = action.payload;
    },
  },
});

export const { selectCar } = carReducer.actions;
export default carReducer.reducer;
