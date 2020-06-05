import React from "react";
import classes from "./RecommendedOffer.module.scss";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import LoadingSpinner from "../../../UI/LoadingSpinner/LoadingSpinner";

const RecommendedOffer = (props) => {

  let weatherIcon;
  let weatherDegree;
  if (props.weathers.get(props.city) !== undefined) {
    weatherIcon = props.weathers.get(props.city).current
      .weather_icons[0];
    weatherDegree = props.weathers.get(props.city).current
      .temperature;
  }

  return (
      <div className={classes.RecommendedOffer}>
        <div className={classes.ImgContainer}>
          <Link to={`/offerDetails/${props.city}`}>
            <img
              src={`images/${props.cntrImgUrl}`}
              alt={`${props.city} landscape`}
            />
          </Link>
        </div>
        <div>
          <ul>
            <li>
              <div>
                <h3>{props.country}</h3>
                <p>
                  <strong>{props.city}</strong>
                </p>

                <h2>{props.price}</h2>
              </div>
            </li>
            <li style={{margin: "1em 2em"}} className={classes.WeatherBox}>
              {props.isFetching ? (
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
              {props.from}
              <br />
              {props.to}
            </li>
          </ul>
        </div>
      </div>
    );
  }

const mapStateToProps = (state) => {
  return {
    weathers: state.weathers,
    isFetching: state.isFetching,
  };
};


export default connect(mapStateToProps, null)(RecommendedOffer);
