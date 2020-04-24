import React, {Component} from "react";
import classes from "./CarOffer.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWrench, faGasPump} from "@fortawesome/free-solid-svg-icons";
import ImageModal from "../../../Offer/OfferDetails/ImageModal/ImageModal";

class CarOffer extends Component {
  state = {
    galleryIsOpen: false,
  };

  openGalleryHandler = () => {
    const galleryIsOpen = this.state.galleryIsOpen;
    this.setState({galleryIsOpen: !galleryIsOpen});
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
        <div></div>

        <table>
          <th>
            <h3>
              <FontAwesomeIcon icon={faWrench} /> Specification
            </h3>
          </th>
          <tbody>
            {this.props.model.details.map((detail) => {
              const separateDetail = detail.split(":");
              return (
                <tr>
                  <td>{separateDetail[0]}</td>
                  <td>{separateDetail[1]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <table className={classes.FuelConsumptionTable}>
          <tbody>
            <th colSpan="2">
              <h3>
                <FontAwesomeIcon icon={faGasPump} /> Fuel consumption
              </h3>
            </th>
            {this.props.model.fuelConsumption.map((cons) => {
              const separateDetail = cons.split(":");
              return (
                <tr>
                  <td>{separateDetail[0]}</td>
                  <td>{separateDetail[1]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className={classes.Pricing}>
          <span>
            Price from:{" "}
            <span style={{fontSize: "1.4em"}}>{this.props.model.price}</span>
          </span>
          <button>Rent</button>
        </div>

        {this.state.galleryIsOpen ? (
          <ImageModal
            mainImage={mainPhoto}
            showModal={this.openGalleryHandler}
            photos={this.props.model["photos"]}
            previousImage={this.previousImageHandler}
            nextImage={this.nextImageHandler}
          />
        ) : null}
      </div>
    );
  }
}

export default CarOffer;
