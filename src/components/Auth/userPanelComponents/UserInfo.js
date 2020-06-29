import React from "react";
import styled from "styled-components";

const UserInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em;
`;

const InfoDiv = styled.div`
  width: 250px;
  font-size: 1.5em;
  height: 100px;
  text-align: right;
`;

const UserInfo = (props) => {
  return (
    <UserInfoDiv>
      <InfoDiv>Name : {props.userName}</InfoDiv>
      <InfoDiv>Surname : {props.userSurname}</InfoDiv>
      <InfoDiv>User display Name : {props.userDisplayName}</InfoDiv>
      <InfoDiv>Registered from: {props.userRegisteredTime}</InfoDiv>
    </UserInfoDiv>
  );
};

export default UserInfo;
