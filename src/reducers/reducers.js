const initialState = {
  adults: 2,
  kids: 0
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ADULT": {
      return { ...state, adults: state.adults + 1 };
    }

    case "REMOVE_ADULT": {
      if (state.adults > 0) return { ...state, adults: state.adults - 1 };
      break;
    }

    case "ADD_KID": {
      return { ...state, kids: state.kids + 1 };
    }

    case "REMOVE_KID": {
      if (state.kids > 0) return { ...state, kids: state.kids - 1 };
      break;
    }

    default:
      return state;
  }
};

export default reducers;
