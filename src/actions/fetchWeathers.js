import {
  fetchWeathersPending,
  fetchWeathersSuccess,
  fetchWeathersError,
} from "./fetchWeathersAction";
import axios from "axios";
import Offers from "../components/OffersContainer/Offers";
import {LastMinuteData} from "../components/OffersContainer/LastMinuteModule/LastMinuteOffersData";

function fetchWeathersHandler() {
  const recommendedOffers = Object.keys(Offers);
  const lastMinuteOffers = Object.keys(LastMinuteData);
  const offers = [...recommendedOffers, ...lastMinuteOffers];
  // const offers = ['Madrid', 'Dubrovnik']
  return (dispatch) => {
    dispatch(fetchWeathersPending());
    offers.forEach((city) => {
      return axios
        .get(
          `http://api.weatherstack.com/current?access_key=22109322a48c375ebd5e83eb3ce12344&query=${city}`
        )
        .then((response) => {
          dispatch(fetchWeathersSuccess(response.data));
          return response.data;
        })
        .catch((error) => {
          dispatch(fetchWeathersError(error));
          console.log(error);
        });
    });
  };
}

export default fetchWeathersHandler;
