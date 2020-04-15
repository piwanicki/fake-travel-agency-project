import React from "react";
import classes from "./OfferGuide.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faWifi,
  faSwimmingPool,
  faParking,
  faGlassCheers,
  faWheelchair,
  faBaby,
  faTableTennis,
  faPlaneDeparture,
  faPlaneArrival,
} from "@fortawesome/free-solid-svg-icons";
import {faCalendarAlt} from "@fortawesome/free-regular-svg-icons";
import Offers from "../../../Offers";
import {connect} from "react-redux";

const OfferGuide = (props) => {
  const OfferObj = Offers[`${props.city}`];
  const term = OfferObj.details["term"];
  const flights = OfferObj.details["flights"];
  const ryanFlights = flights["RyanAir"];

  const ryanAirCities = Object.keys(flights["RyanAir"]);
  const wizzairAirCities = Object.keys(flights["WizzAir"]);

  const prepareFlightTable = (cities) => {
    return cities.map((city, key) => (
      <tr key={key}>
        <td>
          <FontAwesomeIcon icon={faPlaneDeparture} />{" "}
          {ryanFlights[city].departure[0]}
        </td>
        <td>{city.split("").splice(0, 3).join("").toUpperCase()}</td>
        <td>
          <FontAwesomeIcon icon={faCalendarAlt} />{" "}
          {ryanFlights[city].departure[1]}
        </td>
        <td>
          <FontAwesomeIcon icon={faPlaneArrival} />{" "}
          {ryanFlights[city].arrival[0]}
        </td>
        <td>
          <FontAwesomeIcon icon={faCalendarAlt} />{" "}
          {ryanFlights[city].arrival[1]}
        </td>
      </tr>
    ));
  };

  const prepareTermTable = (term) => {
    return term.map((term, key) => (
      <tr key={key}>
        <td>
          <FontAwesomeIcon icon={faCalendarAlt} />
          {term.from}
        </td>
        <td>
          <span>-</span>
        </td>
        <td>
          <FontAwesomeIcon icon={faCalendarAlt} />
          {term.to}
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
              {/* <td>{currentCityWeather.observation_time}</td> */}
            </tr>
            <tr>
              <td>Temperature</td>
              {/* <td>{currentCityWeather.temperature}</td> */}
            </tr>
            <tr>
              <td>Pressure</td>
              {/* <td>{currentCityWeather.pressure}</td> */}
            </tr>
            <tr>
              <td>Wind </td>
              {/* <td>currentCityWeather.wind_speed / currentCityWeather.wind_dir </td> */}
            </tr>
            <tr>
              <td>Visiblity</td>
              {/* <td>{currentCityWeather.visibility}</td> */}
            </tr>
          </tbody>
        </table>
      </div>

      <div className={classes.Facilities}>
        <p>Facilities </p>
        <div className={classes.FacilitiesIcons}>
          <span>
            <FontAwesomeIcon icon={faWifi} /> Free WiFi
          </span>
          <span>
            <FontAwesomeIcon icon={faSwimmingPool} /> Swimming Pool
          </span>
          <span>
            <FontAwesomeIcon icon={faParking} /> Free Parking
          </span>
          <span>
            <FontAwesomeIcon icon={faGlassCheers} />
            Open Bar
          </span>
          <span>
            <FontAwesomeIcon icon={faWheelchair} />
            Adapted for disabled Persons
          </span>
          <span>
            <FontAwesomeIcon icon={faBaby} />
            Baby Room
          </span>
          <span>
            <FontAwesomeIcon icon={faTableTennis} />
            Play Room
          </span>
        </div>
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
