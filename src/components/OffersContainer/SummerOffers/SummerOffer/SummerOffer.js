import React from "react";
import classes from "./SummerOffer.module.css";

const SummerOffer = props => {
  return (
    <div className={classes.SummerOffer}>
      <img
        src={`images/summerOffers/${props.country}.jpg`}
        alt={`summer offer ${props.country}`}
      />
      <div className={classes.SummerOfferDetailsBox}>
        <div style={{ width: "50%" }}>
          <h3>{props.country}</h3>
        </div>

        <div style={{ width: "50%" }}>
          {props.price}
          <br />
          <span>
            <div style={{ backgroundColor: "#FF0000", margin: "0.3em 0.3em" }}>
              {props.discount}
            </div>
            <strike>{props.oldPrice}</strike>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SummerOffer;
