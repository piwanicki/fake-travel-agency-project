import React from "react";
import classes from "./DescriptionText.module.scss";
import recomendationLogo from "./recommendationLogo.jpg";

const DescriptionText = (props) => {
  return (
    <div className={classes.DescriptionText}>
      <div className={classes.RecommendationContent}>
        <img
          src={recomendationLogo}
          alt="recommendation"
          className={classes.RecomendationLogo}
        />
        <h3> Highly recommended offer!</h3>
      </div>
      <div className={classes.AdvantagesDescription}>
        <span>Hotel advantages :</span>
        <ul>
          <li> Near the centrum </li>
          <li> Near the beach </li>
          <li> Very tasty meals </li>
          <li> Family friendly </li>
          <li> Wallness / SPA </li>
          <li> Good communications to other cities </li>
        </ul>
      </div>
      <div className={classes.DetailsSection}>
        <h3> Hotel Description : </h3>
        <p>{props.details["desc"]}</p>
        <h3> Facilities : </h3>
        <p>
          {props.details["facilities"].map((facility, index) => (
            <li key={index}>{facility}</li>
          ))}
        </p>
        <h3> Rooms : </h3>
        <p>{props.details["rooms"]}</p>
        <h3> Feeding : </h3>
        <p>
          {props.details["meals"].map((meal, index) => (
            <span key={index}>
              {meal} <br />
            </span>
          ))}
        </p>
        <h3> Baggage : </h3>
        <p className={classes.BaggageInfo}>
          <strong>Gdańsk, Kraków, Katowice, Warszawa Modlin (RyanAir)</strong>{" "}
          <br />
          For flights with charter flights, the price includes hand baggage of 5
          kg and 20 kg of main luggage. <br />
          The price includes hand baggage(40x20x25)
          <br />
          Customers can buy additional luggage weighing 10 kg (55x40x20)
        </p>
        <ul>
          <li>
            EXBAG service - 125 PLN / person, you can also buy checked baggage
            with a weight of each booking
          </li>
          <li>
            20 kg - 245 PLN <br />
          </li>
        </ul>
        <span>
          {" "}
          <strong>Katowice (WizzAir)</strong>
          <br />{" "}
        </span>
        The price includes hand baggage (40x30x20). <br />
        Customers can buy additional luggage weighing 10 kg (55x40x23).
        <ul>
          <li>
            EXBAG service - 110 PLN / person, you can also buy checked baggage
            with a weight of each booking
          </li>
          <li>20 kg - 340 PLN</li>
          <li>32 kg - 470 PLN</li>
        </ul>
        <span>
          <strong>Warning!</strong> <br />
          If luggage or additional services are added after confirming the
          booking, their price will be higher Warsaw (WizzAir). <br />
          The price includes hand baggage (40x30x20). <br />
          Customers can buy additional luggage weighing 10 kg (55x40x23).
        </span>
      </div>
    </div>
  );
};

export default DescriptionText;
