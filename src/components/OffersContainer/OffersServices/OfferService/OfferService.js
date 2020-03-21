import React from "react";
import classes from "./OfferService.module.css";

const OfferService = props => {
  const imgUrl = props.header.replace(" ", "").toLowerCase();
  console.log(imgUrl);
  return (
    <div className={classes.OfferService}>
      <img src={`images/offersServices/${imgUrl}.jpg`} />
      <h3>{props.header}</h3>
      <p>{props.details}</p>
    </div>
  );
};

export default OfferService;
