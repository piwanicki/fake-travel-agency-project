import React, { Component } from "react";
import classes from "./OfferDetails.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Offers from '../../Offers';

class OfferDetails extends Component {
  state = {
    photoUrl: ""
  };

  render() {

    const cityOffer = this.props.match.params.city
    const offerDetails = Offers[cityOffer]
   
    return (
      <div className={classes.OfferDetails}>
        <div className={classes.PhotoContainer}>
          {/* <img className={classes.MainPhoto} src={this.state.photoUrl} alt={`big landscape`} /> */}
        <div className={classes.MainPhoto} src={this.state.photoUrl} alt={`big landscape`} ></div> 
          <div className={classes.photosSlider}>
            <h2>{offerDetails.city}</h2>
            <ul>
              <button>
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <li>
                {/* <img src={""} alt={""} /> */}
                <div>1 photo</div>
              </li>
              <li>
                {/* <img src={""} alt={""} /> */}
                <div>2 photo</div>
              </li>
              <li>
                {/* <img src={""} alt={""} /> */}
                <div>3 photo</div>
              </li>
              <li>
                {/* <img src={""} alt={""} /> */}
                <div>4 photo</div>
              </li>
              <li>
                {/* <img src={""} alt={""} /> */}
                <div>5 photo</div>
              </li>
              <button>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default OfferDetails;
