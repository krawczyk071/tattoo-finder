import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./features/favortiesSlice";
import cartReducer from "./features/cartSlice";

//MIDDLEWARE
const saveToLocalStorage = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    localStorage.setItem("favRedux", JSON.stringify(getState()));
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
  },
  preloadedState: loadFromLocalStorage(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saveToLocalStorage),
});
