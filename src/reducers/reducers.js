const initialState = {
  adults: 2,
  kids: 0,
  weathers : new Map(),
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ADULT": {
      return { ...state, adults: state.adults + 1 };
    }

    case "REMOVE_ADULT": {
      if (state.adults > 0) {
        return { ...state, adults: state.adults - 1 };
      } else {
        return { ...state };
      }
    }

    case "ADD_KID": {
      return { ...state, kids: state.kids + 1 };
    }

    case "REMOVE_KID": {
      if (state.kids > 0) {
        return { ...state, kids: state.kids - 1 };
      } else {
        return { ...state };
      }
    }

    case "UPD_WEATHER" : {
      const updWeathersState = state.weathers;
      const updWeather = updWeathersState.set(action.city, action.weatherDetails);
      return {
        ...state,
        weathers: updWeather
      }
    }

    default:
      return state;
  }
};

export default reducers;
