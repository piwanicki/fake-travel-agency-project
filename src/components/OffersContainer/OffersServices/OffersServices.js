import React from "react";
import classes from "./OffersServices.module.css";
import OfferService from "./OfferService/OfferService";

const OffersServices = props => {
  return (
    <div className={classes.OffersServices}>
      <OfferService
        header="All Inclusive"
        details="All Inclusive tours! Checkout our new offers!"
      />
      <OfferService
        header="Sightseeing Tour"
        details="Go sightseeing with our historician with passion and great humor! Checkout our offers."
      />
      <OfferService
        header="Facultative trips"
        details="Join to sightseeing tour in your current City!  Checkout our offers."
      />

      <OfferService
        header="Cars"
        details="Need transport? No problem! Rent a car from our huge fleet! Checkout our new cars!"
      />
    </div>
  );
};

export default OffersServices;
