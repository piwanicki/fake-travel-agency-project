import React from "react";
import classes from "./SummerOffers.module.css";
import SummerOffer from "./SummerOffer/SummerOffer";
import SummerOffersData from "./SummerOffersData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";

const SummerOffers = props => {
  const cntrOffer = Object.keys(SummerOffersData)
    .splice(0, 4)
    .map((offer, index) => (
      <SummerOffer
        key={index}
        price={SummerOffersData[offer].price}
        country={SummerOffersData[offer].country}
        discount={SummerOffersData[offer].discount}
        oldPrice={SummerOffersData[offer].oldPrice}
      />
    ));

  return (
    <div className={classes.SummerOffersSection}>
      <p>Summer 2020!</p>
      <div className={classes.SummerOffersContainer}>
        <FontAwesomeIcon icon={faChevronLeft} className={classes.Arrow} />
        {cntrOffer}
        <FontAwesomeIcon icon={faChevronRight} className={classes.Arrow} />
      </div>
    </div>
  );
};

export default SummerOffers;
