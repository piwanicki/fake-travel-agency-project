import React from 'react';
import classes from './Offer.module.css';

const Offer = props => {

  console.log(props.cntrImgUrl)
  return (
    <div className={classes.Offer}>
      <div>
      <ul>
          <li>{props.country}</li>
          <li>{props.date}</li>
          <li>Weather (API)</li>
          <li>{props.price}</li>
        </ul>
      </div>
      
      <div className={classes.ImgContainer}>
      <img src={`images/${props.cntrImgUrl}`} alt='landscape' />
    
    </div>
    </div>
  )
}

export default Offer;