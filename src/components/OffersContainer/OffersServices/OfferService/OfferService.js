import React from "react";
import classes from "./OfferService.module.scss";
import {Link} from "react-router-dom";

const OfferService = (props) => {
  const imgUrl = props.header.replace(" ", "").toLowerCase();
  return (
    <div className={classes.OfferService}>
      <Link to={`/offerServices/${imgUrl}`}>
        <img
          src={`images/offersServices/${imgUrl}.jpg`}
          alt={`offer services ${props.header}`}
        />
        <h3>{props.header}</h3>
        <p>{props.details}</p>
      </Link>
    </div>
  );
};

export default OfferService;
