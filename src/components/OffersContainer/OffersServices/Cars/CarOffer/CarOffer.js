import React, {Component} from "react";
import classes from "./CarOffer.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWrench, faGasPump} from "@fortawesome/free-solid-svg-icons";
import ImageModal from "../../../../../UI/ImageModal/ImageModal";
import {Link} from "react-router-dom";
import styled from "styled-components";
import CustomButton from '../../../../../UI/CustomButton/CustomButton';

class CarOffer extends Component {
  state = {
    galleryIsOpen: false,
  };

  openGalleryHandler = () => {
    const galleryIsOpen = this.state.galleryIsOpen;
    this.setState({galleryIsOpen: !galleryIsOpen});
  };

  PriceSpan = styled.span`
    font-size: 1.8em;
    color: #cd0000;
    margin-top: 0.5em;
  `;

  PriceP = styled.p`
    text-align: end;
    margin-bottom: 0;
    padding-top: 15%;
  `;

  render() {
    const mainPhoto = this.props.model["photos"][0];
    const brandLogo = this.props.logo;

    const carModelSplitted = this.props.modelName.includes("_")
      ? `${this.props.modelName.split("_")[0]} ${
          this.props.modelName.split("_")[1]
        }`
      : this.props.modelName;

    return (
      <div className={classes.CarOffer}>
        <div className={classes.ImageZoom}>
          <img
            src={mainPhoto}
            alt={carModelSplitted}
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

          <h4>{carModelSplitted}</h4>
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
          <this.PriceP>
            {" "}
            Price from <br />
            <this.PriceSpan> {this.props.model.price}$ / 24h</this.PriceSpan>
          </this.PriceP>

          <span>
            <Link
              to={`/offerServices/cars/${this.props.brand}/${this.props.modelName}`}
            >
              <CustomButton>Details</CustomButton>
            </Link>
          </span>
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
