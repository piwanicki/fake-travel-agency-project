// import axios from "axios";
// import offers from "../components/OffersContainer/Offers";
import {
  FETCH_WEATHERS_PENDING,
  FETCH_WEATHERS_SUCCESS,
  FETCH_WEATHERS_ERROR,
} from "../actions/fetchWeathersAction";

const initialState = {
  adults: 2,
  kids: 0,
  weathers: new Map(),
  isFetching: false,
  error: null,
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
    case FETCH_WEATHERS_PENDING:
      console.log("fetchWeathers pending");
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_WEATHERS_SUCCESS:
      console.log("fetchWeathers success");
      const weathers = new Map(state.weathers);
      weathers.set(action.city, action.weathers);
      return {
        ...state,
        isFetching: false,
        weathers: weathers,
      };
    case FETCH_WEATHERS_ERROR:
      console.log("fetchWeathers error");
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export const getWeathers = (state) => state.weathers;
export const getWeathersPending = (state) => state.isFetching;
export const getWeathersError = (state) => state.error;

export default reducers;
