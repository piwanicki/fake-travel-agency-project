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
} from "@fortawesome/free-solid-svg-icons";

const OfferGuide = (props) => {
  return (
    <div className={classes.OfferGuide}>

    <h2>{props.country}</h2>
    <h3>{props.city}</h3>
      <p>
       
      </p>

      <div className={classes.Termins}>Term</div>
      <div className={classes.Flights}>Flights - departments</div>

      <div className={classes.WeatherDetails}>Weather details</div>

      <div className={classes.FacilitiesIcons}>
        <FontAwesomeIcon icon={faWifi} />
        <FontAwesomeIcon icon={faSwimmingPool} />
        <FontAwesomeIcon icon={faParking} />
        <FontAwesomeIcon icon={faGlassCheers} />
        <FontAwesomeIcon icon={faWheelchair} />
        <FontAwesomeIcon icon={faBaby} />
        <FontAwesomeIcon icon={faTableTennis} />
      </div>
    </div>
  );
};

export default OfferGuide;
