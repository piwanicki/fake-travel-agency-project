// import axios from "axios";
// import offers from "../components/OffersContainer/Offers";

const initialState = {
  adults: 2,
  kids: 0,
  weathers: new Map(),
  isFetching: true,
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

    // case "UPD_WEATHERS": {
    //   const updWeathers = state.weathers;
    //   updWeathers.set(action.value.city, action.value.current);
    //   return {
    //     ...state,
    //     weathers: updWeathers,
    //   };
    // }

    // case "FETCH_WEATHERS": {
    //   // Object.keys(offers).forEach((city) => {
    //     return axios
    //       .get(
    //         `http://api.weatherstack.com/current?access_key=22109322a48c375ebd5e83eb3ce12344&query=${"Dubrovnik"}`
    //       )
    //       .then((response) => {
    //         const city = response.data.location.name;
    //         const cityData = response.data.current;

    //         return {
    //           ...state,
    //           isFetching: !state.isFetching,
    //         };
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //         return {
    //           ...state,
    //           isFetching: !state.isFetching,
    //         };
    //       });
      
    //     }

    default:
      return state;
  }
};

export default reducers;
