import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggle: (state, action) => {
      const found = state.find((f) => f.id === action.payload);
      if (!found) {
        return [...state, { id: action.payload, favorited: true }];
      } else {
        return [
          ...state.filter((f) => f.id !== action.payload),
          { id: action.payload, favorited: !found.favorited },
        ];
      }
    },
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
