import React from "react";
import RecommendedOffer from "./Offer/RecommendedOffer";
import classes from "./OffersContainer.module.scss";

const OffersContainer = (props) => {
  const offers = props.offers;
  const OffersPanel = Object.keys(offers).map((offer, index) => (
    <RecommendedOffer
      key={index}
      country={offers[offer].country}
      date={offers[offer].date}
      from={offers[offer].from}
      to={offers[offer].to}
      city={offers[offer].city}
      price={`${offers[offer].price} $`}
      cntrImgUrl={`photo_${offers[offer].country.toLowerCase()}.jpg`}
    />
  ));

  return (
    <div className={classes.OffersSection}>
      <div className={classes.RecommendedHeader}>
        <span>Our recommended Offers!</span>
      </div>
      <div className={classes.OffersContainer}>{OffersPanel}</div>
    </div>
  );
};

export default OffersContainer;
