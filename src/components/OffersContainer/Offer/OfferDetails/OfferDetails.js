import React, { Component } from "react";
import classes from "./OfferDetails.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import Offers from "../../Offers";
import GuestBox from "../../../SearchPanel/GuestBox/GuestBox";
import { connect } from "react-redux";

class OfferDetails extends Component {
  state = {
    photoIndex: 0,
    showGuestBox: false,
  };

  reformatDate = (date) => {
    return date.split("-").reverse().join("-");
  };

  changeImageHandler = (index) => {
    this.setState({
      photoIndex: index,
    });
  };

  nextImageHandler = () => {
    const currentIndex = this.state.photoIndex;
    this.setState({
      photoIndex: currentIndex + 1,
    });
  };

  previousImageHandler = () => {
    const currentIndex = this.state.photoIndex;
    this.setState({
      photoIndex: currentIndex - 1,
    });
  };

  render() {
    const cityOffer = this.props.match.params.city;
    const offerDetails = Offers[cityOffer];
    const fromDt = this.reformatDate(offerDetails.from);
    const toDt = this.reformatDate(offerDetails.to);
    const mainPhoto = offerDetails.photos[this.state.photoIndex];

    const photos = offerDetails.photos.map((photo, index) => (
      <li key={index}>
        <img
          src={`${photo}`}
          alt={`${photo}`}
          onClick={() => this.changeImageHandler(index)}
        />
      </li>
    ));

    return (
      <div className={classes.OfferDetails}>
        <div className={classes.PhotoContainer}>
          <img
            className={classes.MainPhoto}
            src={mainPhoto}
            alt={`big landscape`}
          />
          <div className={classes.PhotosSlider}>
            <button
              onClick={this.previousImageHandler}
              disabled={this.state.photoIndex === 0}
            >
              <FontAwesomeIcon icon={faChevronCircleLeft} />
            </button>
            <ul>{photos}</ul>
            <button
              onClick={this.nextImageHandler}
              disabled={this.state.photoIndex === photos.length - 1}
            >
              <FontAwesomeIcon icon={faChevronCircleRight} />
            </button>
          </div>
        </div>
        <div className={classes.DetailsContainer}>
          <div>
            <p>Date :</p>
            From :
            <input type="date" defaultValue={fromDt} />
            To :
            <input type="date" defaultValue={toDt} />
          </div>

          <GuestBox />

          <div>
            <p>From where?</p>
            <label className={classes.customSelect} htmlFor="styledSelect1">
              <select id="styledSelect1">
                <option>somewhere 1</option>
                <option>somewhere 2</option>
                <option>somewhere 3</option>
                <option>somewhere 4</option>
              </select>
            </label>
          </div>

          <div>
            <p>Room</p>
            <label className={classes.customSelect} htmlFor="styledSelect1">
              <select id="styledSelect1">
                <option>Single room</option>
                <option>Double room</option>
                <option>Triple room</option>
              </select>
            </label>
          </div>

          <div>
            <p>Feeding</p>
            <label className={classes.customSelect} htmlFor="styledSelect1">
              <select id="styledSelect1" name="options">
                <option>Only breakfasts</option>
                <option>Only dinners</option>
                <option>Full feeding</option>
              </select>
            </label>
          </div>

          <div className={classes.PricingDetails}>
            <div>
              {" "}
              Adult :<p>{offerDetails.price} $</p>
            </div>
            <div>
              Kid :<p>{offerDetails.kidPrice} $</p>
            </div>

            <div className={classes.SummaryPrice}>
              Summary :
              <p>
                {this.props.adults * offerDetails.price +
                  this.props.kids * offerDetails.kidPrice}{" "}
                $
              </p>
            </div>
          </div>
        <button className={classes.BookBtn}>Book</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    adults: state.adults,
    kids: state.kids,
  };
};

export default connect(mapStateToProps, null)(OfferDetails);
