import React from "react";
import styled from "styled-components";
import {connect} from "react-redux";

const UserInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em;
`;

const InfoDiv = styled.div`
  width: 500px;
  font-size: 1.5em;
  height: 100px;
  display: flex;
  justify-content: space-between;
  span {
    margin: 0 20px;
    font-size: 1.2em;
  }
`;

const UserInfo = (props) => {
  return (
    <UserInfoDiv>
      <InfoDiv>
        <span>Name :</span>
        <span>
          <strong>{props.userName}</strong>
        </span>
      </InfoDiv>
      <InfoDiv>
        <span>Lastname :</span>
        <span>
          <strong>{props.userLastName}</strong>
        </span>
      </InfoDiv>
      <InfoDiv>
        <span>User display Name :</span>
        <span>
          <strong>{props.userDisplayName}</strong>
        </span>
      </InfoDiv>
      <InfoDiv>
        <span>User E-mail :</span>
        <span>
          <strong>{props.userEmail}</strong>
        </span>
      </InfoDiv>
      <InfoDiv>
        <span>Registered from :</span>
        <span>
          <strong>{props.registeredFrom}</strong>
        </span>
      </InfoDiv>
    </UserInfoDiv>
  );
};

const mapStateToProps = (state) => {
  return {
    userName: state.auth.userFirstName,
    userLastName: state.auth.userLastName,
    userDisplayName: state.auth.userDisplayName,
    registeredFrom: state.auth.registeredFrom,
    userEmail: state.auth.userEmail,
  };
};

export default connect(mapStateToProps, null)(UserInfo);
