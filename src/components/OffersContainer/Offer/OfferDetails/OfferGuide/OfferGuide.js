import React from 'react';
import classes from './OfferGuide.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faWifi,faSwimmingPool,faParking, faGlassCheers, faBlind,faBaby, faTableTennis} from '@fortawesome/free-solid-svg-icons';

const OfferGuide = props => {
  
  return (
  <div className={classes.OfferGuide}>

      <p>
        {props.city}
        {/* {props.weather} */}
      </p>

      <div className={classes.Termins}>
        Term
      </div>
      <div className={classes.Flights}>
        Flights - departments
      </div>

      <div className={classes.WeatherDetails} >
          Weather details
      </div>

      <div className={classes.FacilitiesIcons}>
        <FontAwesomeIcon icon={faWifi} />
        <FontAwesomeIcon icon={faSwimmingPool} />
        <FontAwesomeIcon icon={faParking} />
        <FontAwesomeIcon icon={faGlassCheers} />
        <FontAwesomeIcon icon={faBlind} />
        <FontAwesomeIcon icon={faBaby} />
        <FontAwesomeIcon icon={faTableTennis} />
      </div> 
  </div>
  )
}

export default OfferGuide;