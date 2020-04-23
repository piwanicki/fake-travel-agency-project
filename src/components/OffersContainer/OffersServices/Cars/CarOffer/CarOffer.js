import React from "react";
import classes from "./CarOffer.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWrench, faGasPump} from "@fortawesome/free-solid-svg-icons";

const CarOffer = (props) => {
  const mainPhoto = props.model["photos"][0];
  const brandLogo = props.logo;

  return (
    <div className={classes.CarOffer}>
      <div className={classes.ImageZoom}>
        <img src={mainPhoto} alt={props.model} />
      </div>
      <div className={classes.VehicleBrand}>
        <div>
          <h3>{props.brand}</h3>

          <img
            src={brandLogo}
            alt={`${brandLogo} logo`}
            className={classes.BrandLogo}
          />
        </div>

        <h4>{props.modelName}</h4>
      </div>
      <div></div>

      <table>
        <th >
          <h3>
            <FontAwesomeIcon icon={faWrench} /> Specification
          </h3>
        </th>
        <tbody>
          {props.model.details.map((detail) => {
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
          <th>
            <h3>
              <FontAwesomeIcon icon={faGasPump} /> Fuel consumption
            </h3>
          </th>
          {props.model.fuelConsumption.map((cons) => {
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
          <span style={{fontSize: "1.4em"}}>{props.model.price}</span>
        </span>
        <button>Rent</button>
      </div>
    </div>
  );
};

export default CarOffer;
