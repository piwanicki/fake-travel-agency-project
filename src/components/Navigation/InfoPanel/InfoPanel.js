import React, { Component } from "react";
// import classes from "./InfoPanel.module.css";
import classes from "./InfoPanel.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMobile,
  faMapMarkedAlt,
  faEnvelopeOpen
} from "@fortawesome/free-solid-svg-icons";
import LangSelectBox from "./LangSelectBox/LangSelectBox";

class InfoPanel extends Component {
  state = {
    langSelectBox: false
  };

  showLangSelectorBox = () => {
    const isShowing = this.state.langSelectBox;
    this.setState({
      langSelectBox: !isShowing
    });
  };

  langSelectHandler = event => {
    const langSelected = event.target.id;
    console.log(langSelected);
    this.showLangSelectorBox();
  };

  render() {
    return (
      <div className={classes.InfoPanel}>
        <ul>
          <li className={classes.BorderRight}>
            <FontAwesomeIcon icon={faPhone} /> 65 02 003
          </li>
          <li className={classes.BorderRight}>
            <FontAwesomeIcon icon={faMobile} /> +48 123 345 455
          </li>
          <li className={classes.BorderRight}>
            <FontAwesomeIcon icon={faMapMarkedAlt} /> Agency Points
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelopeOpen} /> email@example.com
          </li>
          <li>
            <button type="button">
              <strong>Login</strong>
            </button>
          </li>
          <li
            className={classes.LangSelector}
            onClick={this.showLangSelectorBox}
          >
            <img
              src={`images/langSelector/england.png`}
              alt="language english"
            />
          </li>
          {this.state.langSelectBox ? (
            <LangSelectBox langSelectHandler={this.langSelectHandler} />
          ) : null}
        </ul>
      </div>
    );
  }
}

export default InfoPanel;
