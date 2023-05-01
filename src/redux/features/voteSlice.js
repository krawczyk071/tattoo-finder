import { createSlice } from "@reduxjs/toolkit";

const initialState = { idx: 0, cards: [] };

export const boteSlice = createSlice({
  name: "vote",
  initialState,
  reducers: {
    up: (state, action) => {
      return state.cards.some((y) => y.id === action.payload)
        ? {
            ...state,
            cards: state.cards.map((p) => {
              return p.id === action.payload
                ? { ...p, votes: Number(p.votes) + 1 }
                : p;
            }),
          }
        : {
            ...state,
            cards: [...state.cards, { id: action.payload, votes: 1 }],
          };
    },
    down: (state, action) => {
      return state.cards.some((y) => y.id === action.payload)
        ? {
            ...state,
            cards: state.cards.map((p) => {
              return p.id === action.payload
                ? { ...p, votes: Number(p.votes) - 1 }
                : p;
            }),
          }
        : {
            ...state,
            cards: [...state.cards, { id: action.payload, votes: -1 }],
          };
    },
    saveIdx: (state, action) => {
      return { ...state, idx: action.payload };
    },
  },
});

export const { up, down, saveIdx } = boteSlice.actions;

export default boteSlice.reducer;
