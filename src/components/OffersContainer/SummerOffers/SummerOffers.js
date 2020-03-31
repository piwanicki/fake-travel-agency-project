import React, { Component } from "react";
import classes from "./SummerOffers.module.css";
import SummerOffer from "./SummerOffer/SummerOffer";
import SummerOffersData from "./SummerOffersData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";

class SummerOffers extends Component {
  state = {
    index: 0,
    offerArrLength: Object.keys(SummerOffersData).length
  };

  nextOfferHandler = () => {
    let currentIndex = this.state.index;
    const offerArrLength = this.state.offerArrLength;
    currentIndex = currentIndex + 4 >= offerArrLength ? 0 : currentIndex + 1;
    this.setState({
      index: currentIndex
    });
  };

  previousOfferHandler = () => {
    let currentIndex = this.state.index;
    const offerArrLength = this.state.offerArrLength;
    currentIndex = currentIndex - 1 < 0 ? offerArrLength - 4 : currentIndex - 1;
    this.setState({
      index: currentIndex
    });
  };

  render() {
    const index = this.state.index;
    const cntrOffer = Object.keys(SummerOffersData)
      .splice(index, 4)
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
          <FontAwesomeIcon
            icon={faChevronLeft}
            className={classes.Arrow}
            onClick={this.previousOfferHandler}
          />
          {cntrOffer}
          <FontAwesomeIcon
            icon={faChevronRight}
            className={classes.Arrow}
            onClick={this.nextOfferHandler}
          />
        </div>
      </div>
    );
  }
}

export default SummerOffers;
