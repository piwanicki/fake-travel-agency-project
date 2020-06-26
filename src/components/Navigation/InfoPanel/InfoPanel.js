import React, {Component} from "react";
import classes from "./InfoPanel.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMobile,
  faMapMarkedAlt,
  faEnvelopeOpen,
  faUser,
  faIdCard,
  faEnvelope,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import LangSelectBox from "./LangSelectBox/LangSelectBox";
import english from "./LangSelectBox/langSelectorsIcon/england.png";
// import polish from "./LangSelectBox/langSelectorsIcon/poland.png";
import {Link} from "react-router-dom";
import CustomButton from "../../../UI/CustomButton/CustomButton";
import {connect} from "react-redux";
import {logout} from "../../../actions/auth";
import styled from "styled-components";

const LogoutBtn = styled.span`
  margin-left: 1em;
  border-bottom: 2px solid white;
  padding: 5px 0;
  cursor: pointer;
`;

const UserMenu = styled.div`
  position: absolute;
  top: 2em;
  width: 200px;
  height: 240px;
  background-color: white;
  border: 1px solid grey;
  color: black;
  border-radius: 1em;
`;

const UserMenuEl = styled.div`
  margin: 2rem 1rem;
  height: 30px;
  border-bottom: 1px solid grey;
  font-size: 1.4rem;
  padding-bottom: 1rem;
  color: grey;
  text-align: left;
  a {
    text-decoration: none;
    color: inherit;
  }

  :last-child {
    border-bottom: none;
  }
`;

const UserInfoSpan = styled.span`
  cursor: pointer;
`;

class InfoPanel extends Component {
  state = {
    langSelectBox: false,
    showUserMenu: false,
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

  showUserMenu = () => {
    console.log(`show`);
    const isShowing = this.state.showUserMenu;
    this.setState({showUserMenu: !isShowing});
  };

  render() {
    const userInfoSpan = (
      <UserInfoSpan>
        <span onMouseOver={this.showUserMenu}>
          Hello, {this.props.userDisplayName}
          <FontAwesomeIcon icon={faUser} className={classes.UserIcon} />
        </span>

        <LogoutBtn onClick={this.props.signOut}> Logout</LogoutBtn>
      </UserInfoSpan>
    );

    const loginBtn = (
      <Link to="/Login/signIn">
        <CustomButton type="button">
          <strong>Login</strong>
        </CustomButton>
      </Link>
    );

    const isLogged = this.props.userLogged ? userInfoSpan : loginBtn;

    const userMenuJSX = (
      <UserMenu onMouseLeave={this.showUserMenu}>
        <UserMenuEl>
          <Link to={"/userPanel"}>
            <FontAwesomeIcon icon={faIdCard} /> User Panel
          </Link>
        </UserMenuEl>
        <UserMenuEl>
          <Link to={"/userPanel/favorites"}>
            <FontAwesomeIcon icon={faHeart} /> Favorites
          </Link>
        </UserMenuEl>
        <UserMenuEl>
          <Link to={"/contactForm"}>
            <FontAwesomeIcon icon={faEnvelope} /> Contact Us
          </Link>
        </UserMenuEl>
      </UserMenu>
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
          {this.state.showUserMenu ? userMenuJSX : null}
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
    signOut: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InfoPanel);
