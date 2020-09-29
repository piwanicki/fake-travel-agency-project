import React from "react";
import classes from "./InspirationOffers.module.scss";
import InspirationOffer from "./InspirationOffer/InspirationOffer";
import {Inspirations} from "./Content";

const InspirationOffers = (props) => {
  return (
    <div className={classes.InspirationOffersSection}>
      <span>Find your inspiration!</span>
      <div className={classes.InspirationOffersBox}>
        <InspirationOffer
          header={"Just trip?"}
          textContent={Inspirations.trips}
        />
        <InspirationOffer
          header={"Abroad Trip"}
          textContent={Inspirations.abroadHolidays}
        />
        <InspirationOffer
          header={"Sigtseeing"}
          textContent={Inspirations.roadTrip}
        />
        <InspirationOffer
          header={"Last Minute"}
          textContent={Inspirations.lastMinute}
        />
        <InspirationOffer
          header={"Family Trip?"}
          textContent={Inspirations.familyTrips}
        />
      </div>
    </div>
  );
};

export default InspirationOffers;
