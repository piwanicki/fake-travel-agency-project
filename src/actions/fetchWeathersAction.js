export const FETCH_WEATHERS_PENDING = "FETCH_WEATHERS_PENDING";
export const FETCH_WEATHERS_SUCCESS = "FETCH_WEATHERS_SUCCESS";
export const FETCH_WEATHERS_ERROR = "FETCH_WEATHERS_ERROR";

export function fetchWeathersPending() {
  return {
    type: FETCH_WEATHERS_PENDING,
  };
}

export function fetchWeathersSuccess(weathers) {
  return {
    type: FETCH_WEATHERS_SUCCESS,
    weathers: weathers,
    city: weathers.location.name,
  };
}

export function fetchWeathersError(error) {
  return {
    type: FETCH_WEATHERS_ERROR,
    error: error,
  };
}
