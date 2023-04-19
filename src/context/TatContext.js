import { tatData } from "../utils/data";

const { createContext } = require("react");
const { useReducer } = require("react");

const initState = tatData;
export const TatContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "VOTE_UP": {
      return state.map((t) => {
        if (t.id === action.payload.id) {
          return { ...t, votes: Number(t.votes) + 1 };
        } else {
          return t;
        }
      });
    }
    case "VOTE_DOWN": {
      return state.map((t) => {
        if (t.id === action.payload.id) {
          return { ...t, votes: Number(t.votes) - 1 };
        } else {
          return t;
        }
      });
    }
    default:
      return state;
  }
};

export const TatProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <TatContext.Provider value={[state, dispatch]}>
      {children}
    </TatContext.Provider>
  );
};
