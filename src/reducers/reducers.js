const initialState = {
  adults: 2,
  kids: 0,
  weathers: new Map(),
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ADULT": {
      return {...state, adults: state.adults + 1};
    }

    case "REMOVE_ADULT": {
      if (state.adults > 0) {
        return {...state, adults: state.adults - 1};
      } else {
        return {...state};
      }
    }

    case "ADD_KID": {
      return {...state, kids: state.kids + 1};
    }

    case "REMOVE_KID": {
      if (state.kids > 0) {
        return {...state, kids: state.kids - 1};
      } else {
        return {...state};
      }
    }

    case "UPD_WEATHERS": {
      const updWeathers = state.weathers;
      updWeathers.set(action.value.city, action.value.current);
      return {
        ...state,
        weathers: updWeathers,
      };
    }

    default:
      return state;
  }
};

export default reducers;
