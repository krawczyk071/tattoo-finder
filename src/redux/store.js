import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./features/favortiesSlice";
import cartReducer from "./features/cartSlice";
import tatsReducer from "./features/tatsSlice";
import voteReducer from "./features/voteSlice";

//LocalStorage MIDDLEWARE
const saveToLocalStorage = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    localStorage.setItem(
      "favRedux",
      JSON.stringify({ favorites: getState().favorites })
    );
    return result;
  };
};

const loadFromLocalStorage = () => {
  if (localStorage.getItem("favRedux") !== null) {
    return JSON.parse(localStorage.getItem("favRedux")); // re-hydrate the store
  }
};

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    cart: cartReducer,
    tats: tatsReducer,
    vote: voteReducer,
  },
  preloadedState: { favorites: loadFromLocalStorage()?.favorites },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saveToLocalStorage),
});
