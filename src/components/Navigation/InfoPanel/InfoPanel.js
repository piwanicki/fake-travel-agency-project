import React from 'react';
import classes from './InfoPanel.module.css';

const InfoPanel = props => {
  return (
    <div className={classes.InfoPanel}> 
      <ul>
        <li>Phone Number</li>
        <li>Cell Phone Number</li>
        <li>Agency Points</li>
        <li>E-mail address</li>
        <li>Login</li>
        <li>lang selector</li>
      </ul>
    </div>
  )
}

export default InfoPanel;