import React from "react";
import classes from "./ContactInfoBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMobile,
  faEnvelopeOpen,
  faClock
} from "@fortawesome/free-solid-svg-icons";

const ContactInfoBar = props => {
  return (
    <div className={classes.ContactInfoBar}>
      <div>
        <FontAwesomeIcon icon={faClock} />
        <p>
          Mon-Fri : 8 - 20 <br />
          Sat-Sun : 10 - 18
        </p>
      </div>

      <div>
        <FontAwesomeIcon icon={faPhone} />
        <p>
          <br />
          65 02 003
        </p>
      </div>

      <div>
        <FontAwesomeIcon icon={faMobile} />
        <p>
          <br />
          +48 123 345 455
        </p>
      </div>

      <div>
        <FontAwesomeIcon icon={faEnvelopeOpen} />
        <p>
          <br />
          email@example.com
        </p>
      </div>
    </div>
  );
};

export default ContactInfoBar;
