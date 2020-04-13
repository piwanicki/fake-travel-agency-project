import React from 'react';
import classes from './OfferGuide.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faWifi,faSwimmingPool,faParking, faGlassCheers, faBlind,faBaby, faTableTennis} from '@fortawesome/free-solid-svg-icons';

const OfferGuide = props => {
  
  return (
  <div className={classes.OfferGuide}>

      <p>
        {this.props.city}
        {this.props.weather}
      </p>

      <div className={classes.Termins}>
        Term
      </div>
      <div className={classes.Flights}>
        Flights - departments
      </div>

      <div className={classes.WeatherDetails} >

      </div>

      <div className={classes.FacilitiesIcons}>
        <FontAwesomeIcon icon={faWifi} />
        <FontAwesomeIcon icon={faSwimmingPool} />
        <FontAwesomeIcon icon={faParking} />
        <FontAwesomeIcon icon={faGlassCheers} />
      </div> 
  </div>
  )
}

export default OfferGuide;