import favoritesReducer from "./favoritesReducer";
import { combineReducers } from "redux";
// import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  //   firestore: firestoreReducer,
});

export default rootReducer;
