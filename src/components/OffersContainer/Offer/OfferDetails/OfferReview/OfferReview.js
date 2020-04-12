import React from "react";
import classes from "./OfferReview.module.scss";
import Ratings from 'react-ratings-declarative';


const OfferReview = (props) => {
  return (
    <div className={classes.OfferReview}>
      {/* <p>{props.review}</p> */}
      <span>Author</span>
      <p>
        review content
        lsadadsasdlasdlsaldsaldlsadlsadlsadlasldasldasldlassdlsadlasdlasldasldasldasld
      </p>
      <p>Date</p>
      <div className={classes.StarRating}>
      <Ratings
        rating={3.403}
        widgetDimensions="40px"
        widgetSpacings="15px"
      >
        <Ratings.Widget widgetRatedColor="green" />
        <Ratings.Widget widgetSpacing="30px" widgetDimension="15px" />
        <Ratings.Widget widgetRatedColor="black" />
        <Ratings.Widget widgetRatedColor="rebeccapurple" />
        <Ratings.Widget />
      </Ratings>
    </div>
    </div>
  );
};

export default OfferReview;



