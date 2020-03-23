import React from "react";
import classes from "./InspirationOffers.module.css";
import InspirationOffer from "./InspirationOffer/InspirationOffer";

const InspirationOffers = props => {
  return (
    <div className={classes.InspirationOffersSection}>
      <span>Find your inspiration!</span>
      <div className={classes.InspirationOffersBox}>
        <InspirationOffer header={"Croatia"} />
        <InspirationOffer header={"Croatia"} />
        <InspirationOffer header={"Croatia"} />
        <InspirationOffer header={"Croatia"} />
        <InspirationOffer header={"Croatia"} />
      </div>
    </div>
  );
};

export default InspirationOffers;
