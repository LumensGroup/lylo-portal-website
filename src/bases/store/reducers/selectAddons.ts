import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AddonsState {
  selectedAddons: Record<string, any>;
}

const initialState: AddonsState = {
  selectedAddons: {
    selectedCdw: {}, // default CDW Basic
    selectedAddonsItemList: [],
    // seatNumber: 1,
  },
};

const selectedAddonsReducer = createSlice({
  name: "selectedAddonsReducer",
  initialState,
  reducers: {
    setOrAddAddon: (state, action: PayloadAction<Record<string, any>>) => {
      state.selectedAddons = {
        ...state.selectedAddons,
        ...action?.payload,
      };
    },
  },
});

export const { setOrAddAddon } = selectedAddonsReducer.actions;
export default selectedAddonsReducer.reducer;
