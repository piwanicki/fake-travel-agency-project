import React from "react";
import Offer from "./Offer/Offer";
import classes from "./OffersContainer.module.css";

const OffersContainer = props => {
  const offers = props.offers;
  console.log(offers);
  const OffersPanel = Object.keys(offers).map((offer, index) => (
    <Offer
      key={index}
      country={offers[offer].country}
      date={offers[offer].date}
      price={offers[offer].price}
      cntrImgUrl={`photo_${offer.toLowerCase()}.jpg`}
    />
  ));

  return (
    <div className={classes.OffersSection}>
      <div className={classes.RecommendedHeader}>
        <p>Our recommended Offers!</p>
      </div>
      <div className={classes.OffersContainer}>{OffersPanel}</div>
    </div>
  );
};

export default OffersContainer;
