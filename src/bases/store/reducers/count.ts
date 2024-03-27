import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface YourState {
  count: number;
  message: string;
  searchData: object;
}

const initialState: YourState = {
  count: 0,
  message: 'Hello, Redux!',
  searchData: {},
};

const yourReducer = createSlice({
  name: 'yourReducer',
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    setSearchData:(state, action: PayloadAction<object>) => {
      state.searchData = action.payload;
    },
  }
});

export const { increment, decrement, setMessage, setSearchData } = yourReducer.actions;
export default yourReducer.reducer;
