import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Button from "../../../UI/CustomButton/CustomButton";
import CustomInput from "../../../UI/CustomInput/CustomInput";

const UserInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px;
  height: 600px;

  button {
    align-self: flex-end;
    margin: 0;
  }
`;

const InfoDiv = styled.div`
  padding: 1em;
  width: 450px;
  display: flex;

  span {
    width: 180px;
    margin: 0 25px;
    font-size: 1.2em;
    text-align: left;
  }
`;

const StatisticDiv = styled.div`
  border-top: 1px solid grey;
  margin: 20px 0;
  padding: 20px 0;
  font-size: 1.2em;

  div {
    margin: 10px;
  }
`;

const UserInfo = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const userNameInput = <CustomInput type="text" placeholder="New Name..." />;
  const userSurnameInput = (
    <CustomInput type="text" placeholder="New Surname..." />
  );
  const userDisplayName = (
    <CustomInput type="text" placeholder="New Display Name..." />
  );

  return (
    <UserInfoDiv>
      <InfoDiv>
        <span>Name :</span>

        {isEditing ? (
          userNameInput
        ) : (
          <span>
            <strong>{props.userName}</strong>
          </span>
        )}
      </InfoDiv>
      <InfoDiv>
        <span>Surname :</span>
        {isEditing ? (
          userSurnameInput
        ) : (
          <span>
            <strong>{props.userLastName}</strong>
          </span>
        )}
      </InfoDiv>
      <InfoDiv>
        <span>User display Name :</span>
        {isEditing ? (
          userDisplayName
        ) : (
          <span>
            <strong>{props.userDisplayName}</strong>
          </span>
        )}
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
      <Button onClick={() => setIsEditing(!isEditing)}>Edit</Button>
      <StatisticDiv>
        <h4>Statistics</h4>
        <div>Favorites : 5</div>
        <div>Realized Trips : 5</div>
        <div>Reservations : 5</div>
        <div>Last login : {props.registeredFrom}</div>
      </StatisticDiv>
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
