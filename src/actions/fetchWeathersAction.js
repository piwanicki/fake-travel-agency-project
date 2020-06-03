export const FETCH_WEATHERS_PENDING = 'FETCH_PRODUCTS_PENDING';
export const FETCH_WEATHERS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_WEATHERS_ERROR = 'FETCH_PRODUCTS_ERROR';

export function fetchWeathersPending() {
    return {
        type: FETCH_WEATHERS_PENDING
    }
}

export function fetchWeathersSuccess(weathers) {
    return {
        type: FETCH_WEATHERS_SUCCESS,
        weathers: weathers,
        city: weathers.location.name
    }
}

export function fetchWeathersError(error) {
    return {
        type: FETCH_WEATHERS_ERROR,
        error: error
    }
}