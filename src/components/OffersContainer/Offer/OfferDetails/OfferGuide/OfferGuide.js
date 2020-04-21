import React from "react";
import classes from "./OfferGuide.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";
import Offers from "../../../Offers";
import {connect} from "react-redux";
console.log(icons);

const OfferGuide = (props) => {
  const OfferObj = Offers[`${props.city}`];
  const term = OfferObj.details["term"];
  const flights = OfferObj.details["flights"];
  const ryanFlights = flights["RyanAir"];
  const faciIcons = OfferObj.details["facilitiesIcons"];

  const ryanAirCities = Object.keys(flights["RyanAir"]);
  const wizzairAirCities = Object.keys(flights["WizzAir"]);

  const prepareFlightTable = (cities) => {
    return cities.map((city, key) => (
      <tr key={key}>
        <td>
          <FontAwesomeIcon icon={icons.faPlaneDeparture} />{" "}
          {ryanFlights[city].departure[0]}
        </td>
        <td>{city.split("").splice(0, 3).join("").toUpperCase()}</td>
        <td>
          <FontAwesomeIcon icon={icons.faCalendarAlt} />{" "}
          {ryanFlights[city].departure[1]}
        </td>
        <td>
          <FontAwesomeIcon icon={icons.faPlaneArrival} />{" "}
          {ryanFlights[city].arrival[0]}
        </td>
        <td>
          <FontAwesomeIcon icon={icons.faCalendarAlt} />{" "}
          {ryanFlights[city].arrival[1]}
        </td>
      </tr>
    ));
  };

  const prepareTermTable = (term) => {
    return term.map((term, key) => (
      <tr key={key} className={classes.TermTableRow}>
        <td>
          <FontAwesomeIcon icon={icons.faCalendarAlt} />
        </td>

        <td>
          <span>From : </span>
          {term.from}
        </td>

        <td>
          <span>To : </span>
          {term.to}
        </td>
        <td>
          <button
            id={key}
            onClick={(e) => props.checkTerminHandler(e.target.id)}
          >
            Check
          </button>
        </td>
      </tr>
    ));
  };

  const termJS = prepareTermTable(term);

  const ryanFlightsJSX = prepareFlightTable(ryanAirCities);
  const wizzairFlightsJSX = prepareFlightTable(wizzairAirCities);
  const depArrTR = (
    <>
      <tr>
        <td colSpan="3">Departure</td>
        <td colSpan="2">Arrivals</td>
      </tr>
    </>
  );

  const facilitiesIconsJSX = faciIcons.map((el, key) => (
    <span key={key}>
      <FontAwesomeIcon icon={icons[el[0]]} /> {el[1]}
    </span>
  ));

  return (
    <div className={classes.OfferGuide}>
      <h2>{props.country}</h2>
      <h3>{props.city}</h3>

      <div className={classes.Termins}>
        <p>Other free term: </p>
        <table>
          <tbody>{termJS}</tbody>
        </table>
      </div>

      <div className={classes.Flights}>
        <p>Flights</p>
        <table>
          <tbody>
            <tr>
              <th colSpan="5">RyanAir</th>
            </tr>
            {depArrTR}
            {ryanFlightsJSX}
          </tbody>
        </table>

        <table>
          <tbody>
            <tr>
              <th colSpan="5">Wizzair</th>
            </tr>
            {depArrTR}
            {wizzairFlightsJSX}
          </tbody>
        </table>
      </div>

      <div className={classes.WeatherDetails}>
        <p>Weather details</p>

        <table>
          <tbody>
            <tr>
              <th colSpan="2">{props.city} Weather</th>
            </tr>
            <tr>
              <td>Time</td>
              <td>
                example time
                {/* {currentCityWeather.observation_time} */}
              </td>
            </tr>
            <tr>
              <td>Temperature</td>
              <td>
                example time Temperature
                {/* {currentCityWeather.temperature}*/}
              </td>
            </tr>
            <tr>
              <td>Pressure</td>
              <td>
                example Pressure
                {/*  {currentCityWeather.pressure}*/}
              </td>
            </tr>
            <tr>
              <td>Wind </td>
              <td>
                example Wind
                {/* currentCityWeather.wind_speed / currentCityWeather.wind_dir */}
              </td>
            </tr>
            <tr>
              <td>Visiblity</td>
              <td>
                example Visiblity
                {/* {currentCityWeather.visibility} */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={classes.Facilities}>
        <p>Facilities </p>
        <div className={classes.FacilitiesIcons}>{facilitiesIconsJSX}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    weatherMap: state.weathers,
  };
};

export default connect(mapStateToProps, null)(OfferGuide);
