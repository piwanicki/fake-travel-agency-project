import React, { Component } from "react";
import classes from "./CarOffer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench, faGasPump } from "@fortawesome/free-solid-svg-icons";
import ImageModal from "../../../../../UI/ImageModal/ImageModal";

class CarOffer extends Component {
  state = {
    galleryIsOpen: false,
  };

  openGalleryHandler = () => {
    const galleryIsOpen = this.state.galleryIsOpen;
    this.setState({ galleryIsOpen: !galleryIsOpen });
  };

  previousImageHandler = () => {
    console.log(`previousImageHandler`);
  };

  nextImageHandler = () => {
    console.log(`nextImageHandler`);
  };

  render() {
    const mainPhoto = this.props.model["photos"][0];
    const brandLogo = this.props.logo;

    return (
      <div className={classes.CarOffer}>
        <div className={classes.ImageZoom}>
          <img
            src={mainPhoto}
            alt={this.props.model}
            onClick={this.openGalleryHandler}
          />
        </div>
        <div className={classes.VehicleBrand}>
          <div>
            <h3>{this.props.brand}</h3>

            <img
              src={brandLogo}
              alt={`${brandLogo} logo`}
              className={classes.BrandLogo}
            />
          </div>

          <h4>{this.props.modelName}</h4>
        </div>

        <div className={classes.SpecTable}>
          <table>
            <tbody>
              <tr>
                <th colSpan="2">
                  <FontAwesomeIcon icon={faWrench} /> Specification
                </th>
              </tr>

              {this.props.model.details.map((detail, index) => {
                const separateDetail = detail.split(":");
                return (
                  <tr key={index}>
                    <td>{separateDetail[0]}</td>
                    <td>{separateDetail[1]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className={classes.FuelConsumptionTable}>
          <table>
           

            <tbody>
            <tr>
              <th colSpan="2">
                <FontAwesomeIcon icon={faGasPump} /> Fuel consumption
              </th>
            </tr>
              {this.props.model.fuelConsumption.map((cons, index) => {
                const separateDetail = cons.split(":");
                return (
                  <tr key={index}>
                    <td>{separateDetail[0]}</td>
                    <td>{separateDetail[1]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className={classes.Pricing}>
          <p style={{ textAlign: "end", marginBottom: "0", paddingTop: "15%" }}>
            Price from <br />
            <span
              style={{
                fontSize: "1.8em",
                color: "#cd0000",
                marginTop: "0.5em",
              }}
            >
              {this.props.model.price}
            </span>
          </p>

          <button>Details</button>
        </div>

        {this.state.galleryIsOpen ? (
          <ImageModal
            mainPhoto={mainPhoto}
            showModal={this.openGalleryHandler}
            photos={this.props.model["photos"]}
          />
        ) : null}
      </div>
    );
  }
}

export default CarOffer;
