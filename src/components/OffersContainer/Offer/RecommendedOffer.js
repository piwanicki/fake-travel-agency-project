import React, {Component} from "react";
import classes from "./RecommendedOffer.module.scss";
//import axios from "axios";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import LoadingSpinner from "../../../UI/LoadingSpinner/LoadingSpinner";

class RecommendedOffer extends Component {
  render() {
    let weatherIcon;
    let weatherDegree;
    if (this.props.weathers.get(this.props.city) !== undefined) {
      weatherIcon = this.props.weathers.get(this.props.city).current
        .weather_icons[0];
      weatherDegree = this.props.weathers.get(this.props.city).current
        .temperature;
    }

    return (
      <div className={classes.RecommendedOffer}>
        <div className={classes.ImgContainer}>
          <Link to={`/offerDetails/${this.props.city}`}>
            <img
              src={`images/${this.props.cntrImgUrl}`}
              alt={`${this.props.city} landscape`}
            />
          </Link>
        </div>
        <div>
          <ul>
            <li>
              <div>
                <h3>{this.props.country}</h3>
                <p>
                  <strong>{this.props.city}</strong>
                </p>

                <h2>{this.props.price}</h2>
              </div>
            </li>
            <li style={{margin: "1em 2em"}} className={classes.WeatherBox}>
              {this.props.isFetching ? (
                <LoadingSpinner />
              ) : (
                <>
                  <img src={weatherIcon} alt="weather" />
                  <h3>{weatherDegree} &#186; C</h3>
                </>
              )}
            </li>
            <li
              style={{
                color: "#000066",
                fontSize: "1.2em",
              }}
            >
              Date:
              <br />
              {this.props.from}
              <br />
              {this.props.to}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    weathers: state.weathers,
    isFetching: state.isFetching,
  };
};

// const dispatchPropsToState = (dispatch) => {

// };

export default connect(mapStateToProps, null)(RecommendedOffer);
