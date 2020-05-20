import React, {Component} from "react";
import classes from "./RecommendedOffer.module.scss";
import axios from "axios";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

class RecommendedOffer extends Component {
  state = {
    weather: this.props.weather.get(this.props.city),
  };

  // componentDidMount = () => {
  //   if (this.props.weather.get(this.props.city) === undefined) {
  //     this.weatherAPIAxios();
  //   }
  // };


  weatherAPIAxios = () => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=22109322a48c375ebd5e83eb3ce12344&query=${this.props.city}`
      )
      .then((response) => {
        const cityWeatherObj = {
          city: this.props.city,
          location: response.data.location,
          current: response.data.current,
        };
        this.props.weatherAPIHandler(cityWeatherObj);
        // this.setState({
        //   weather: response.data.current.temperature,
        //   weatherIcon: response.data.current.weather_icons,
        // });
      })
      .catch((error) => console.log(`Undefined city`));
  };

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
              <img src={this.props.weather.weather_icon} alt="weather" />
              <h3>{this.props.weather.temperature} &#186; C</h3>
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
    weather: state.weathers,
  };
};

const dispatchPropsToState = (dispatch) => {
  return {
    weatherAPIHandler: (weatherObj) =>
      dispatch({type: "UPD_WEATHERS", value: weatherObj}),
  };
};

export default connect(mapStateToProps, dispatchPropsToState)(RecommendedOffer);
