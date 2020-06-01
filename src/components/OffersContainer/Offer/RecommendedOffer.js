import React, {Component} from "react";
import classes from "./RecommendedOffer.module.scss";
//import axios from "axios";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import LoadingSpinner from "../../../UI/LoadingSpinner/LoadingSpinner";

class RecommendedOffer extends Component {
  render() {
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
              {this.props.isFetching ? <LoadingSpinner /> : null}

              {/* <>
                  <img src={this.props.weather.weather_icon} alt="weather" />
                  <h3>{this.props.weather.temperature} &#186; C</h3>
                </>  */}
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

const dispatchPropsToState = (dispatch) => {
  return {
    weatherAPIHandler: (weatherObj) =>
      dispatch({type: "UPD_WEATHERS", value: weatherObj}),
  };
};

export default connect(mapStateToProps, dispatchPropsToState)(RecommendedOffer);
