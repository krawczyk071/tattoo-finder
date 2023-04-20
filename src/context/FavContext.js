import { useEffect } from "react";

const { createContext } = require("react");
const { useReducer } = require("react");

const initState = JSON.parse(localStorage.getItem("tatfavs")) || [];

export const FavContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGG_FAVORITE": {
      const found = state.find((f) => f.id === action.payload.tat);
      if (!found) {
        return [...state, { id: action.payload.tat, favorited: true }];
      } else {
        return [
          ...state.filter((f) => f.id !== action.payload.tat),
          { id: action.payload.tat, favorited: !found.favorited },
        ];
      }
    }
    default:
      return state;
  }
};

export const FavProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  useEffect(
    () => localStorage.setItem("tatfavs", JSON.stringify(state)),
    [state]
  );
  return (
    <FavContext.Provider value={[state, dispatch]}>
      {children}
    </FavContext.Provider>
  );
};
