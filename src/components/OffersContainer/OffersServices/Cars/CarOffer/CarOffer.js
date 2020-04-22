import React from "react";
import classes from "./CarOffer.module.scss";

const CarOffer = (props) => {

  const mainPhoto = props.model['photos'][0];

  return (
    <div className={classes.CarOffer}>
      <img src={mainPhoto} alt={props.model} />
      <h3>{props.brand}</h3>
      <p>{props.model.desc}</p>
    </div>
  );
};

export default CarOffer;
