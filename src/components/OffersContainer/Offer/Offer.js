import React, { Component } from "react";
import classes from "./Offer.module.scss";
import axios from "axios";
import { Link } from "react-router-dom";

class Offer extends Component {
  state = {
    weather: null,
    weatherIcon: null
  };

  componentDidMount = () => {
    //this.weatherAPIHandler();
  };

  weatherAPIHandler = () => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=22109322a48c375ebd5e83eb3ce12344&query=${this.props.city}`
      )
      .then(response =>
        this.setState({
          weather: response.data.current.temperature,
          weatherIcon: response.data.current.weather_icons
        })
      )
      .catch(error => console.log(`Undefined city`));
  };

  offerSelectedHandler = city => {};

  render() {
    return (
      <div className={classes.Offer}>
        <ul>
          <li>
            <div>
              <h3>{this.props.country}</h3>
              <p>
                <strong>{this.props.city}</strong>
              </p>
            </div>
          </li>
          <li style={{ margin: "1.1em" }}>
            <img src={this.state.weatherIcon} alt="weather" />
            <h3>{this.state.weather} &#186; C</h3>
          </li>
          <li>
            Date:
            <br />
            {this.props.from}
            <br />
            {this.props.to}
          </li>
          <li>
            <h2>{this.props.price}</h2>
          </li>
        </ul>

        <div
          className={classes.ImgContainer}
          onClick={() => this.offerSelectedHandler(this.props.city)}
        >
          <Link to={`/offerDetails/${this.props.city}`}>
            <img
              src={`images/${this.props.cntrImgUrl}`}
              alt={`${this.props.city} landscape`}
            />
          </Link>
        </div>
      </div>
    );
  }
}

export default Offer;
