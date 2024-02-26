import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface YourState {
  count: number;
  message: string;
}

const initialState: YourState = {
  count: 0,
  message: 'Hello, Redux!'
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
    }
  }
});

export const { increment, decrement, setMessage } = yourReducer.actions;
export default yourReducer.reducer;
