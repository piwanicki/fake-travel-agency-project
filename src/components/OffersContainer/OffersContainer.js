import React, { Component } from "react";
import Offer from "./Offer/Offer";
import classes from "./OffersContainer.module.scss";

class OffersContainer extends Component {
  

  render() {
    const offers = this.props.offers;
    const OffersPanel = Object.keys(offers).map((offer, index) => (
      <Offer
        key={index}
        country={offers[offer].country}
        date={offers[offer].date}
        from={offers[offer].from}
        to={offers[offer].to}
        city={offers[offer].city}
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
  }
}

export default OffersContainer;
