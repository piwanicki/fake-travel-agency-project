import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faMinusSquare } from "@fortawesome/free-solid-svg-icons";
import classes from "./GuestBox.module.scss";

const GuestBox = props => {
  return (
    <div className={classes.GuestBox} style={{ marginLeft: "0" }}>
      <p>Guests</p>
      <div>
        <span>
          <p>Adult</p>
        </span>
        <FontAwesomeIcon icon={faPlusSquare} onClick={props.addAdultHandler} />
        <p>{props.adults}</p>
        <FontAwesomeIcon
          icon={faMinusSquare}
          onClick={props.removeAdultHandler}
        />
      </div>

      <div>
        <span>
          <p>Kids</p>
        </span>
        <FontAwesomeIcon icon={faPlusSquare} onClick={props.addKidHandler} />
        <p>{props.kids}</p>
        <FontAwesomeIcon
          icon={faMinusSquare}
          onClick={props.removeKidHandler}
        />
      </div>
    </div>
  );
};

export default GuestBox;
