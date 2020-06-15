import {
  FETCH_WEATHERS_PENDING,
  FETCH_WEATHERS_SUCCESS,
  FETCH_WEATHERS_ERROR,
} from "../actions/fetchWeathersAction";

const initialState = {
  weathers: new Map(),
  isFetching: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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

export default reducer;

export const getWeathersError = state => state.error;
export const getWeathers = state => state.weathers;
export const getIsFetching = state => state.getIsFetching;
