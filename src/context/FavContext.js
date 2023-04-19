const { createContext } = require("react");
const { useReducer } = require("react");

const initState = [];
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
  return (
    <FavContext.Provider value={[state, dispatch]}>
      {children}
    </FavContext.Provider>
  );
};
