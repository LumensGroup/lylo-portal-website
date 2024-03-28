import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AddonsState {
  selectedAddons: Record<string, any>;
}

const initialState: AddonsState = {
  selectedAddons: {
    selectedCdw: {}, // default CDW Basic
    selectedAddonsItemList: [],
    seatNumber: 1,
  },
};

const selectedAddonsReducer = createSlice({
  name: "selectedAddonsReducer",
  initialState,
  reducers: {
    // setSelectedAddons: (state, action: PayloadAction<Record<string, any>>) => {
    //   state.selectedAdons = action.payload;
    // },
    // addAddon: (state, action: PayloadAction<{ key: string; value: any }>) => {
    //   const { key, value } = action.payload;
    //   state.selectedAdons[key] = value;
    // },
    // removeAddon: (state, action: PayloadAction<string>) => {
    //   const keyToRemove = action.payload;
    //   delete state.selectedAdons[keyToRemove];
    // },
    // updateAddon: (
    //   state,
    //   action: PayloadAction<{ key: string; value: any }>
    // ) => {
    //   const { key, value } = action.payload;
    //   if (state.selectedAdons.hasOwnProperty(key)) {
    //     state.selectedAdons[key] = value;
    //   } else {
    //     // Handle error or throw exception if key does not exist
    //   }
    // },
    setOrAddAddon: (state, action: PayloadAction<Record<string, any>>) => {
      state.selectedAddons = {
        ...state.selectedAddons,
        ...action.payload,
      };
    },
  },
});

export const { setOrAddAddon } = selectedAddonsReducer.actions;
export default selectedAddonsReducer.reducer;
