import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      return [...state, action.payload];
    },
    remove: (state, action) => {
      return state.filter((s) => s.id !== action.payload.id);
    },
    clear: (state) => {
      return initialState;
    },
  },
});

export const { add, remove, clear } = cartSlice.actions;

export default cartSlice.reducer;
