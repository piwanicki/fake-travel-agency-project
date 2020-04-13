import React, { Component } from "react";
import classes from "./OfferReview.module.scss";
import Ratings from "react-ratings-declarative";

class OfferReview extends Component {
  state = {
    ratings: [5, 5, 2, 3, 5],
    rating: 0,
  };

  componentDidMount = () => {
    const ratings = this.state.ratings;
    this.setState({
      rating: ratings.reduce((acc, red) => acc + red) / ratings.length,
    });
  };

  // changeRating(newRating) {
  //   this.setState({
  //     rating: newRating,
  //   });
  // }

  render() {
    return (
      <div className={classes.OfferReview}>
        <div style={{ textAlign: "right" }}>Author</div>
        <p>
          review content
          lsadadsasdlasdlsaldsaldlsadlsadlsadlasldasldasldlassdlsadlasdlasldasldasldasld
        </p>
        <span style={{ fontSize: "1.3em" }}>Date</span>
        <div className={classes.StarRating}>
          <Ratings
            rating={this.state.rating}
            widgetDimensions="40px"
            widgetSpacings="5px"
            widgetEmptyColor="grey"
            widgetHoverColors="orange"
            widgetRatedColors="orange"
            // changeRating={(newRating) => this.changeRating(newRating)}
          >
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
          </Ratings>
          <p style={{ margin: "0" }}>
            <span style={{ fontSize: "1.3em" }}>
              <strong>{this.state.rating}</strong>
            </span>{" "}
            / {this.state.ratings.length} reviews
          </p>
        </div>
      </div>
    );
  }
}

export default OfferReview;
