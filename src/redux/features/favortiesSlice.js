import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
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
  },
});

export const { increment, decrement, incrementByAmount, toggle } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
