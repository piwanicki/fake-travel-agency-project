import React, {useState} from "react";
import classes from "./LastMinuteOffer.module.scss";
import {Link} from "react-router-dom";
import ImageModal from "../../../../../UI/ImageModal/ImageModal";
import styled from "styled-components";
import Ratings from "react-ratings-declarative";

const LastMinuteOffer = (props) => {
  const [galleryIsOpen, showGallery] = useState(false);

  const PriceSpan = styled.span`
    font-size: 1.8em;
    color: #cd0000;
    margin-top: 0.5em;
  `;

  const roundHalf = (num) => {
    return Math.round(num * 2) / 2;
  };

  const PriceP = styled.p`
    text-align: end;
    margin-bottom: 0;
    padding-top: 15%;
  `;

  const OfferDetailsDiv = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    margin: 5px auto;
    height: 190px;
    box-sizing: border-box;
    p {
      color: #cd0000;
    }
    h2 {
      color: #cd0000;
      margin: 0;
    }
    h3 {
      margin: 0;
      color: #000066;
    }

    .hotelInfo {
      margin-right: 5px;
    }
  `;

  const DivFlexStart = styled.div`
    align-self: flex-start;
    justify-self: flex-start;
    margin: 1em;
  `;

  const ReviewContainer = styled.div`
    margin-top: 1em;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    .reviewRatings {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 75px;
      height: 40px;
      background: #66cd00;
      color: whitesmoke;
      font-size: 1.4em;
      border-radius: 5px;
    }
  `;

  const hotelRatings = () => {
    const ratingsWidgets = [];
    for (let i = 0; i < props.offer.hotelRat; i++) {
      ratingsWidgets.push(<Ratings.Widget />);
    }
    return ratingsWidgets;
  };

  return (
    <div className={classes.LastMinuteOffer}>
      <div className={classes.ImageZoom}>
        <img
          src={props.offer.photos[0]}
          alt={props.offer.country}
          onClick={() => showGallery(!galleryIsOpen)}
        />
      </div>
      <OfferDetailsDiv>
        <DivFlexStart>
          <h3>{props.offer.country}</h3>
          <p>
            <strong>{props.offer.city}</strong>
          </p>

          <span>
            <span className="hotelInfo">
              <strong>{props.offer.hotel}</strong>
            </span>

            <Ratings
              rating={props.offer.hotelRat}
              widgetDimensions="12px"
              widgetSpacings="2px"
              widgetEmptyColor="grey"
              widgetHoverColors="orange"
              widgetRatedColors="orange"
            >
              {hotelRatings()}
            </Ratings>
          </span>

          <div>
            <ReviewContainer>
              <span className="reviewRatings">
                <strong>
                  {roundHalf(
                    props.offer.reviews.reduce((acc, red) => acc + red) /
                      props.offer.reviews.length
                  ).toFixed(1)}
                </strong>
                &nbsp;/&nbsp;5
              </span>
              <span>&nbsp; {props.offer.reviews.length} reviews</span>
            </ReviewContainer>
          </div>
        </DivFlexStart>
        <div style={{margin: "1em 2em"}} className={classes.WeatherBox}>
          {/* <img src={props.weather.weather_icon} alt="weather" />
              <h3>{props.weather.temperature} &#186; C</h3> */}
          POGODA
        </div>
        Date:
        <br />
        {props.offer.from}
        <br />
        {props.offer.to}
      </OfferDetailsDiv>

      <div className={classes.Pricing}>
        <PriceP>
          Price from <br />
          <PriceSpan> {props.offer.price}$ / 24h</PriceSpan>
        </PriceP>
        <span>
          <Link to={`/lasMinute/${props.offer.country}`}>
            <button>Details</button>
          </Link>
        </span>
      </div>

      {galleryIsOpen ? (
        <ImageModal
          mainPhoto={props.offer.photos[0]}
          showModal={() => showGallery(!galleryIsOpen)}
          photos={props.offer.photos}
        />
      ) : null}
    </div>
  );
};

export default LastMinuteOffer;
