import React from "react";
import classes from "./Footer.module.css";
import CustomInput from "../../../UI/CustomInput/CustomInput";

const Footer = (props) => {
  return (
    <div className={classes.Footer}>
      <div className={classes.FooterContent}>
        <div className={classes.AboutUsSection}>
          <p>About us</p>
          <ul>
            <li> About us </li>
            <li> Contact </li>
            <li> Agency locations </li>
            <li> Career </li>
          </ul>
        </div>

        <div className={classes.GuideSection}>
          <p>Help</p>
          <ul>
            <li> Agreement </li>
            <li> Personal data </li>
            <li> Service regulations </li>
            <li> Reservation - step by step </li>
            <li> FAQ </li>
            <li> Airlines </li>
          </ul>
        </div>

        <div className={classes.socialContact}>
          <p>Find us</p>
          <ul>
            <li>Facebook </li>
            <li>Youtube </li>
            <li>Linkedin </li>
            <li>Instagram </li>
          </ul>
        </div>
      </div>

      <div className={classes.NewsLetterContainer}>
        <span style={{fontSize: "1.2em"}}>
          Join to our newsletter and receive new offers and special promotions!{" "}
        </span>
        <CustomInput
          type="email"
          placeholder=" Your email address..."
          id={classes.newsLetterInput}
        />
        <button type="button"> Join </button>
        <br />
        *By clicking the 'Join' button you confirm that you have read the
        Privacy Policy.
      </div>
    </div>
  );
};

export default Footer;
