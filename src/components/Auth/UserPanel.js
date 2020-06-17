import React from "react";
import styled from "styled-components";
import {
  faIdCard,
  faHeart,
  faCheck,
  faSuitcaseRolling,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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

  &:first-child {
    border-top: 1px solid grey;
  }

  span {
    cursor: pointer;
  }
`;

const UserInfoDiv = styled.div`
  width: 70%;
  padding: 2em;
`;

const UserPanel = (props) => {
  return (
    <UserPanelContainer>
      <FunctionsDiv>
        <Function>
          <span>
            <FontAwesomeIcon icon={faIdCard} /> User Info
          </span>
        </Function>
        <Function>
          <span>
            <FontAwesomeIcon icon={faHeart} /> Favorites Offers
          </span>
        </Function>
        <Function>
          <span>
            <FontAwesomeIcon icon={faCheck} /> Reservations
          </span>
        </Function>
        <Function>
          <span>
            <FontAwesomeIcon icon={faSuitcaseRolling} /> Realized Trips
          </span>
        </Function>
      </FunctionsDiv>
      <UserInfoDiv></UserInfoDiv>
    </UserPanelContainer>
  );
};

export default UserPanel;
