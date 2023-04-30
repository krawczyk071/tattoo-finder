const initState = [];

const cartReducer = (state = initState, action) => {
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
export default cartReducer;
