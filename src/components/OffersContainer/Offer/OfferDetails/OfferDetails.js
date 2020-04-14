import React, {Component} from "react";
import classes from "./OfferDetails.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import Offers from "../../Offers";
import GuestBox from "../../../SearchPanel/GuestBox/GuestBox";
import {connect} from "react-redux";
import ReactDOM from "react-dom";
import LocalizationMap from "./LocalizationMap/LocalizationMap";
import DescriptionText from "./DescriptionText/DescriptionText";
import OfferReview from "./OfferReview/OfferReview";
import OfferGuide from "./OfferGuide/OfferGuide";

class OfferDetails extends Component {
  state = {
    photoIndex: 0,
    showGuestBox: false,
    images: null,
    activeTab: "guide",
  };

  reformatDate = (date) => {
    return date.split("-").reverse().join("-");
  };

  changeImageHandler = (index) => {
    this.state.images[this.state.photoIndex].classList.remove(
      classes.SelectedImg
    );
    this.state.images[index].classList.add(classes.SelectedImg);
    this.setState({
      photoIndex: index,
    });
  };

  componentDidMount = () => {
    const imagesList = ReactDOM.findDOMNode(this).getElementsByClassName(
      "PhotosList"
    )[0].children;
    imagesList[this.state.photoIndex].classList.add(classes.SelectedImg);
    document
      .getElementById(this.state.activeTab)
      .classList.add(classes.SelectedTab);
    this.setState({images: imagesList});
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

  selectTabHandler = (key) => {
    if (key !== "") {
      document
        .getElementById(this.state.activeTab)
        .classList.remove(classes.SelectedTab);
      document.getElementById(key).classList.add(classes.SelectedTab);
      this.setState({activeTab: key});
    }
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

    let descriptionContent;

    switch (this.state.activeTab) {
      case "desc": {
        descriptionContent = <DescriptionText details={offerDetails.details} />;
        break;
      }

      case "loc": {
        descriptionContent = (
          <LocalizationMap lat={offerDetails.lat} lon={offerDetails.lon} />
        );
        break;
      }

      case "guide": {
        descriptionContent = (
          <OfferGuide city={cityOffer} country={offerDetails.country} />
        );
        break;
      }

      case "rev": {
        descriptionContent = <OfferReview />;
        break;
      }

      default: {
        descriptionContent = <DescriptionText details={offerDetails.details} />;
      }
    }

    return (
      <div className={classes.OfferDetailsContainer}>
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
              <ul className="PhotosList">{photos}</ul>
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
                Adult :<p>{offerDetails.price} $</p>
              </div>
              <div>
                Kid :<p>{offerDetails.kidPrice} $</p>
              </div>

              <div className={classes.SummaryPrice}>
                Summary :
                <p>
                  {this.props.adults * offerDetails.price +
                    this.props.kids * offerDetails.kidPrice}
                  $
                </p>
              </div>
            </div>
            <button className={classes.BookBtn} type="button">
              Book
            </button>
          </div>
        </div>
        <div className={classes.OfferDescription}>
          <div
            className={classes.DescriptionTabs}
            onClick={(e) => this.selectTabHandler(e.target.id)}
          >
            <div className={classes.Tab} id="desc">
              Description
            </div>
            <div className={classes.Tab} id="loc">
              Localization
            </div>
            <div className={classes.Tab} id="guide">
              Guide
            </div>
            <div className={classes.Tab} id="rev">
              Reviews
            </div>
          </div>

          <div className={classes.DescriptionText}>{descriptionContent}</div>
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
