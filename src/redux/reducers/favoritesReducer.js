const initState = {};

// const projectReducer = (state = initState, action) => {
//   switch (action.type) {
//     case 'CREATE_PROJECT_SUCCESS':
//       console.log('create project success');
//       return state;
//     case 'CREATE_PROJECT_ERROR':
//       console.log('create project error');
//       return state;
//     default:
//       return state;
//   }
// };

const favoritesReducer = (state = initState, action) => {
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

export default favoritesReducer;
