import React from 'react';
import classes from './InfoPanel.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone, faMobile, faMapMarkedAlt , faEnvelopeOpen} from '@fortawesome/free-solid-svg-icons';

const InfoPanel = props => {
  return (
    <div className={classes.InfoPanel}> 
      <ul>
        <li><FontAwesomeIcon icon={faPhone} /> 65 02 003</li>
        <li><FontAwesomeIcon icon={faMobile} /> +48 123 345 455</li>
        <li><FontAwesomeIcon icon={faMapMarkedAlt} /> Agency Points</li>
        <li><FontAwesomeIcon icon={faEnvelopeOpen} /> email@example.coms</li>
        <li><strong>Login</strong></li>
        <li>lang selector</li>
      </ul>
    </div>
  )
}

export default InfoPanel;