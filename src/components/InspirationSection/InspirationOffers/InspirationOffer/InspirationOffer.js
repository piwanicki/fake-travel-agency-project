import React from "react";
import classes from "./InspirationOffer.module.css";

const InspirationOffer = props => {
  return (
    <div className={classes.InspirationOffer}>
      <h2>{props.header}</h2>
      <img
        src={`images/inspirations/${props.header.toLowerCase()}.jpg`}
        alt={`${props.header}`}
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus
        dictum tellus, sit amet lobortis ligula vulputate eu. Maecenas fringilla
        finibus quam
      </p>
      <a href="/">Read more...</a>
    </div>
  );
};

export default InspirationOffer;
