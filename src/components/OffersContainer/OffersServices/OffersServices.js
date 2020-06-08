import React from "react";
import classes from "./OffersServices.module.scss";
import OfferService from "./OfferService/OfferService";

const OffersServices = (props) => {
  return (
    <div className={classes.OffersServices}>
      <OfferService
        header="All Inclusive"
        details="All Inclusive tours! Checkout our new offers!"
        component="allInclusive"
      />
      <OfferService
        header="Sightseeing Tour"
        details="Go sightseeing with our historician with passion and great humor! Checkout our offers."
        component="sightseeingTour"
      />
      <OfferService
        header="Facultative trips"
        details="Join to sightseeing tour in your current City!  Checkout our offers."
        component="facultativeTrip"
      />

      <OfferService
        header="Cars"
        details="Need transport? No problem! Rent a car from our huge fleet! Checkout our new cars!"
        component="cars"
      />
    </div>
  );
};

export default OffersServices;
