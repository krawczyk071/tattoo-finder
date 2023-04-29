import { tatData } from "../utils/data";
import { getFire } from "../utils/firebase";

const { createContext, useEffect } = require("react");
const { useReducer } = require("react");

const initState = { data: [], loading: true };
export const TatContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "VOTE_UP": {
      const newTats = state.data.map((t) => {
        if (t.id === action.payload.id) {
          return { ...t, votes: Number(t.votes) + 1 };
        } else {
          return t;
        }
      });
      return { ...state, data: newTats };
    }
    case "VOTE_DOWN": {
      const newTats = state.data.map((t) => {
        if (t.id === action.payload.id) {
          return { ...t, votes: Number(t.votes) - 1 };
        } else {
          return t;
        }
      });
      return { ...state, data: newTats };
    }
    case "SET_LOADING": {
      return { ...state, loading: true };
    }
    case "GET_TATTOOS": {
      return { ...state, data: action.payload, loading: false };
    }
    default:
      return state;
  }
};

export const TatProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const loadTattoos = async () => {
    dispatch({ type: "SET_LOADING" });

    const data = await getFire();

    dispatch({ type: "GET_TATTOOS", payload: data });
  };
  useEffect(() => {
    loadTattoos();
  }, []);
  return (
    <TatContext.Provider value={[state, dispatch]}>
      {children}
    </TatContext.Provider>
  );
};
