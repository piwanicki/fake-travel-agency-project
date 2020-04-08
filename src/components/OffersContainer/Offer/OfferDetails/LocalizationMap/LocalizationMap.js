import React, { Component } from "react";
import classes from "./LocalizationMap.module.scss";
import axios from "axios";

class LocalizationMap extends Component {

  componentDidMount = () => {
    window.tomtom.L.map("map", {
      source: "vector",
      key: "cyzOA0RM7PpCZkp2Dxg3Iwi23H8Lcaz3",
      center: [this.props.lat, this.props.lon],
      basePath: "/mapsdk",
      zoom: 15,
    });

    axios
      .get(
        `https://api.tomtom.com/map/1/tile/basic/main/0/0/0.pbf?view=Unified&key=cyzOA0RM7PpCZkp2Dxg3Iwi23H8Lcaz3`
      )
      .then((response) => console.log(response.data))
      .then((response) => this.setState({ map: response }));
  };
  render() {
    return <div className={classes.LocalizationMap} id="map"></div>;
  }
}

export default LocalizationMap;
