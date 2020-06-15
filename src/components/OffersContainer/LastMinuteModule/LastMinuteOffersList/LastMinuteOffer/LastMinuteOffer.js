import React, { useState } from "react";
import classes from "./LastMinuteOffer.module.scss";
import { Link } from "react-router-dom";
import ImageModal from "../../../../../UI/ImageModal/ImageModal";
import styled from "styled-components";
import Ratings from "react-ratings-declarative";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import {
  faGlassCheers,
  faCar,
  faPlane,
  faThumbsUp,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import LoadingSpinner from "../../../../../UI/LoadingSpinner/LoadingSpinner";

const PriceP = styled.p`
  text-align: end;
  margin-bottom: 0;
  padding-top: 15%;
`;

const PriceSpan = styled.span`
  font-size: 1.8em;
  color: #cd0000;
  margin-top: 0.5em;
`;

const OfferDetailsDiv = styled.div`
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  border-right: 1px solid grey;
  border-left: 1px solid grey;
  margin: 5px auto;
  height: 190px;
  padding: 0 5px;
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
  margin-top: 1em;
  width: 200px;
  height: 150px;
  display: inline-flex;
  align-items: center;
`;

const DivFlexEnd = styled.div`
  width: 300px;
  align-self: flex-end;
  justify-self: flex-end;
  height: 150px;
`;

const InlineFlexDiv = styled.div`
  display: inline-flex;
`;

const UserRatings = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 40px;
  background: #66cd00;
  color: whitesmoke;
  font-size: 1.4em;
  border-radius: 5px;
`;

const ReviewContainer = styled.div`
  margin-top: 0.5em;
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
  .usersRecommendation {
    font-size: 1.2em;
    color: gray;
    margin-left: 10px;
    svg {
      margin-left: 10px;
    }
  }
`;

const FacilitiesBox = styled.div`
  align-self: flex-end;
  display: inline-flex;
  align-items: center;
  justify-contentl: center;
  width: 98%;
  margin: 0 auto;
  height: 30px;
  span {
    padding-right: 2em;
  }
`;

const DateDiv = styled.div`
  color: gray;
  font-size: 1.2em;
  display: flex;
  flex-direction: column;
  span {
    padding: 0.5em;
  }
  svg {
    margin-right: 0.5em;
  }
`;

const LastMinuteOffer = (props) => {
  const [galleryIsOpen, showGallery] = useState(false);

  let weatherIcon;
  let weatherDegree;

  if (props.weathers.get(props.offer.city) !== undefined) {
    weatherIcon = props.weathers.get(props.offer.city).current.weather_icons[0];
    console.log(weatherIcon);
    weatherDegree = props.weathers.get(props.offer.city).current.temperature;
  }

  const roundHalf = (num) => {
    return Math.round(num * 2) / 2;
  };

  const hotelRatings = () => {
    const ratingsWidgets = [];
    for (let i = 0; i < props.offer.hotelRat; i++) {
      ratingsWidgets.push(<Ratings.Widget key={i} />);
    }
    return ratingsWidgets;
  };

  const prepFacilitiesIcons = props.offer.facilitiesTags.map((tag, index) => {
    let icon;
    switch (tag) {
      case "All Inclusive": {
        icon = faGlassCheers;
        break;
      }

      case "On Your Own": {
        icon = faCar;
        break;
      }

      case "Last Minute": {
        icon = faClock;
        break;
      }

      case "Flight": {
        icon = faPlane;
        break;
      }
      default: {
        break;
      }
    }

    return (
      <span key={index}>
        <FontAwesomeIcon icon={icon} />
        &nbsp;
        {tag}
      </span>
    );
  });

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
        <InlineFlexDiv>
          <DivFlexStart>
            <div>
              <h3>{props.offer.country}</h3>
              <p>
                <strong>{props.offer.city}</strong>
              </p>
              <span>
                <span className="hotelInfo">
                  <strong>{props.offer.hotel}</strong>
                </span>
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
              <div>
                <ReviewContainer>
                  <UserRatings>
                    <strong>
                      {roundHalf(
                        props.offer.reviews.reduce((acc, red) => acc + red) /
                          props.offer.reviews.length
                      ).toFixed(1)}
                    </strong>
                    &nbsp;/&nbsp;5
                  </UserRatings>
                  <span>&nbsp; {props.offer.reviews.length} reviews</span>
                </ReviewContainer>
              </div>
            </div>
          </DivFlexStart>
          <DivFlexEnd>
            <ReviewContainer>
              <UserRatings>96%</UserRatings>
              <span className="usersRecommendation">
                Users recommended!
                <FontAwesomeIcon icon={faThumbsUp} />
              </span>
            </ReviewContainer>
            <InlineFlexDiv>
              <ul>
                <li>1 advantage</li>
                <li>2 advantage</li>
                <li>3 advantage</li>
                <li>4 advantage</li>
              </ul>
              <ul>
                <li>5 advantage</li>
                <li>6 advantage</li>
                <li>7 advantage</li>
                <li>8 advantage</li>
              </ul>
            </InlineFlexDiv>
          </DivFlexEnd>
        </InlineFlexDiv>
        <div className={classes.WeatherBox}>
          {props.isFetching ? (
            <LoadingSpinner />
          ) : (
            <>
              <img src={weatherIcon} alt="weather" />
              <h3>{weatherDegree} &#186; C</h3>
            </>
          )}
        </div>
        <DateDiv>
          <span>
            {" "}
            <FontAwesomeIcon icon={faCalendarAlt} />
            {props.offer.from}
          </span>

          <span>
            <FontAwesomeIcon icon={faCalendarAlt} />
            {props.offer.to}
          </span>
        </DateDiv>

        <FacilitiesBox>{prepFacilitiesIcons}</FacilitiesBox>
      </OfferDetailsDiv>

      <div className={classes.Pricing}>
        <PriceP>
          Price from <br />
          <PriceSpan> {props.offer.price}$</PriceSpan>
        </PriceP>
        <span>
          <Link to={`/lastMinute/offerDetails/${props.offer.city}`}>
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

const mapStateToProps = (state) => {
  return {
    weathers: state.weather.weathers,
    isFetching: state.weather.isFetching,
  };
};

export default connect(mapStateToProps, null)(LastMinuteOffer);
