import React, {Component} from "react";
import classes from "./InfoPanel.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMobile,
  faMapMarkedAlt,
  faEnvelopeOpen,
} from "@fortawesome/free-solid-svg-icons";
import LangSelectBox from "./LangSelectBox/LangSelectBox";
import english from "./LangSelectBox/langSelectorsIcon/england.png";
// import polish from "./LangSelectBox/langSelectorsIcon/poland.png";
import {Link} from "react-router-dom";
import CustomButton from "../../../UI/CustomButton/CustomButton";
import {connect} from "react-redux";
import {AUTH_LOGOUT} from "../../../actions/authActions";
import styled from 'styled-components';

const LogoutBtn = styled.span`
  margin-left: 2em;
  border-bottom: 2px solid white;
  padding: 5px;
  cursor: pointer;
`;

class InfoPanel extends Component {
  state = {
    langSelectBox: false,
  };

  showLangSelectorBox = () => {
    const isShowing = this.state.langSelectBox;
    this.setState({
      langSelectBox: !isShowing,
    });
  };

  langSelectHandler = (event) => {
    const langSelected = event.target.id;
    console.log(langSelected);
    this.showLangSelectorBox();
  };

  render() {
    const isLogged = this.props.userLogged ? (
      <span>
        Hello, {this.props.userDisplayName}
        <LogoutBtn onClick={this.props.signOut}>Logout</LogoutBtn>
      </span>
    ) : (
      <Link to="/Login/signIn">
        <CustomButton type="button">
          <strong>Login</strong>
        </CustomButton>
      </Link>
    );

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
        </ul>

        <span className={classes.LoginLangBox}>
          {isLogged}
          <img
            src={english}
            alt="language icon"
            className={classes.LangSelector}
            onClick={this.showLangSelectorBox}
          />
        </span>

        {this.state.langSelectBox ? (
          <LangSelectBox langSelectHandler={this.langSelectHandler} />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userLogged: state.auth.userLogged,
    userDisplayName: state.auth.userDisplayName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch({type: AUTH_LOGOUT}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InfoPanel);
