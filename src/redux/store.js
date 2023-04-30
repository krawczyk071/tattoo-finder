import { configureStore, createListenerMiddleware } from "@reduxjs/toolkit";
import favoritesReducer from "./features/favortiesSlice";
import cartReducer from "./features/cartSlice";
import tatsReducer from "./features/tatsSlice";

// // Create the middleware instance and methods
// const listenerMiddleware = createListenerMiddleware()

// listenerMiddleware.startListening({
//   actionCreator: listenFb,
//   effect: async (action, listenerApi) => {

//   },
// })

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
  },
  preloadedState: { favorites: loadFromLocalStorage()?.favorites },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      // .prepend(listenerMiddleware.middleware)
      .concat(saveToLocalStorage),
});
