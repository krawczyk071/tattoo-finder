import { createContext } from "react";
import { useReducer } from "react";

export const CartContext = createContext();

const initState = [];

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <CartContext.Provider value={[state, dispatch]}>
      {children}
    </CartContext.Provider>
  );
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CART_ADD": {
      return [...state, { ...action.payload }];
    }
    case "CART_REMOVE": {
      return state.filter((s) => s.id !== action.payload.id);
    }
    case "CART_EMPTY": {
      return initState;
    }
    default:
      return state;
  }
};
