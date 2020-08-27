import React, {Component} from "react";
import classes from "./LocalizationMap.module.scss";

class LocalizationMap extends Component {
  componentDidMount = () => {
    window.tomtom.L.map("map", {
      source: "vector",
      key: "cyzOA0RM7PpCZkp2Dxg3Iwi23H8Lcaz3",
      center: [this.props.lat, this.props.lon],
      basePath: "/mapsdk",
      zoom: 15,
      language: "en-GB",
    });
  };

  render() {
    return <div className={classes.LocalizationMap} id="map"></div>;
  }
}

export default LocalizationMap;
