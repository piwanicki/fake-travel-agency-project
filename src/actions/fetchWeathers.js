import {
  fetchWeathersPending,
  fetchWeathersSuccess,
  fetchWeathersError,
} from "./fetchWeathersAction";
import axios from "axios";
import Offers from "../components/OffersContainer/Offers";
import {LastMinuteData} from "../components/OffersContainer/LastMinuteModule/LastMinuteOffersData";

const recommendedOffers = Object.keys(Offers);
const lastMinuteOffers = Object.keys(LastMinuteData);
const offers = [...recommendedOffers, ...lastMinuteOffers];
//const offers = ["Madrid", "Dubrovnik"];

export const fetchWeathersHandler = (city) => {
  return (dispatch) => {
    dispatch(fetchWeathersPending());
    return axios
      .get(
        `http://api.weatherstack.com/current?access_key=22109322a48c375ebd5e83eb3ce12344&query=${city}`
      )
      .then((response) => {
        localStorage.setItem(city, JSON.stringify(response.data));
        dispatch(fetchWeathersSuccess(response.data));
        return response.data;
      })
      .catch((error) => {
        dispatch(fetchWeathersError(error));
        console.log(error);
      });
  };
};

export const chekWeathersState = () => {
  return (dispatch) => {
    offers.forEach((city) => {
      const weathers = JSON.parse(localStorage.getItem(city));
      if (weathers !== null) {
        if (weathers.success) {
          dispatch(fetchWeathersSuccess(city));
        } else {
          dispatch(fetchWeathersError(weathers.error));
        }
      } else {
        dispatch(fetchWeathersHandler(city));
      }
    });
  };
};
