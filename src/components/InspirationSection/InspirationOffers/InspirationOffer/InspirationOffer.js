import React from "react";
import classes from "./InspirationOffer.module.scss";

const InspirationOffer = (props) => {
  return (
    <div className={classes.InspirationOffer}>
      <h2>{props.header}</h2>
      <p>{props.textContent}</p>
    </div>
  );
};

export default InspirationOffer;
