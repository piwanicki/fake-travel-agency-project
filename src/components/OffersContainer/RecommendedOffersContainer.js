import React from "react";
import RecommendedOffer from "./Offer/RecommendedOffer";
import classes from "./RecommendedOffersContainer.module.scss";

const RecommendedOffersContainer = (props) => {
  const offers = props.offers;
  const OffersPanel = Object.keys(offers).map((offer, index) => (
    <RecommendedOffer
      key={index}
      offer={offers[offer]}
    />
  ));

  return (
    <div className={classes.OffersSection}>
      <div className={classes.RecommendedHeader}>
        <span>Our recommended Offers!</span>
      </div>
      <div className={classes.RecommendedOffersContainer}>{OffersPanel}</div>
    </div>
  );
};

export default RecommendedOffersContainer;
