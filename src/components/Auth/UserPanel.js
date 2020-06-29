import React from "react";
import styled from "styled-components";
import {
  faIdCard,
  faHeart,
  faCheck,
  faSuitcaseRolling,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import UserInfo from "./userPanelComponents/UserInfo";
import UserFavorites from "./userPanelComponents/UserFavorites";
import UserRealizedTrips from "./userPanelComponents/UserRealizedTrips";
import UserReservations from "./userPanelComponents/UserReservations";
import {Link} from "react-router-dom";

const UserPanelContainer = styled.div`
  margin: 0 2em;
  height: 700px;
  background-color: rgba(137, 152, 87, 0.1);
  border-radius: 2em;
  margin-bottom: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FunctionsDiv = styled.div`
  width: 30%;
  border-right: 1px solid gray;
  padding: 2em;
`;

const Function = styled.div`
  margin: 0 0.5em;
  height: 150px;
  font-size: 2em;
  color: gray;
  border-bottom: 1px solid grey;
  display: flex;
  justify-content: left;
  align-items: center;

  a {
    text-decoration: none;
    color: inherit;
  }

  &:first-child {
    border-top: 1px solid grey;
  }

  span {
    cursor: pointer;
  }
`;

const ContentDiv = styled.div`
  width: 70%;
  padding: 2em;
`;

const UserPanel = (props) => {
  const USER_INFO = "userInfo";
  const FAVORITES = "favorites";
  const RESERVATIONS = "reservations";
  const REALIZED_TRIPS = "realizedTrips";

  const userInfo = <UserInfo />;
  const favorites = <UserFavorites />;
  const reservations = <UserReservations />;
  const realizedTrips = <UserRealizedTrips />;

  let content;
  const contentUrl = props.match.params.content;

  switch (contentUrl) {
    case USER_INFO: {
      content = userInfo;
      break;
    }

    case FAVORITES: {
      content = favorites;
      break;
    }

    case RESERVATIONS: {
      content = reservations;
      break;
    }

    case REALIZED_TRIPS: {
      content = realizedTrips;
      break;
    }

    default: {
      return content;
    }
  }

  return (
    <UserPanelContainer>
      <FunctionsDiv>
        <Function>
          <Link to={"/userPanel/userInfo"}>
            <span id={USER_INFO}>
              <FontAwesomeIcon icon={faIdCard} /> User Info
            </span>
          </Link>
        </Function>
        <Function>
          <Link to={"/userPanel/favorites"}>
            <span id={FAVORITES}>
              <FontAwesomeIcon icon={faHeart} /> Favorites Offers
            </span>
          </Link>
        </Function>
        <Function>
          <Link to={"/userPanel/reservations"}>
            <span id={RESERVATIONS}>
              <FontAwesomeIcon icon={faCheck} /> Reservations
            </span>
          </Link>
        </Function>
        <Function>
          <Link to="/userPanel/realizedTrips">
            <span id={REALIZED_TRIPS}>
              <FontAwesomeIcon icon={faSuitcaseRolling} /> Realized Trips
            </span>
          </Link>
        </Function>
      </FunctionsDiv>
      <ContentDiv>{content}</ContentDiv>
    </UserPanelContainer>
  );
};

export default UserPanel;
