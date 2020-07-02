import React, {useState} from "react";
import styled from "styled-components";
import {connect} from "react-redux";
import Button from "../../../UI/CustomButton/CustomButton";
import CustomInput from "../../../UI/CustomInput/CustomInput";
import instance from "../../../axios-db-instance";
import {updateUserDbData} from "../../../actions/auth";

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
  width: 450px;
  display: flex;
  height: 50px;
  align-items: center;
  box-sizing: border-box;

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

  const newNameInputRef = React.createRef();
  const newSurnameInputRef = React.createRef();
  const newDisplayNameInputRef = React.createRef();

  const updateUserDataDB = () => {
    setIsEditing(!isEditing);
    const updUserData = {
      displayName: newDisplayNameInputRef.current.value,
      firstName: newNameInputRef.current.value,
      surname: newSurnameInputRef.current.value,
      email: props.userEmail,
      regFrom: props.registeredFrom,
    };
    props.updDbUserData(updUserData);

    instance
      .patch(`/users/${props.userId}.json`, updUserData)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const button = isEditing ? (
    <Button onClick={updateUserDataDB}>Save</Button>
  ) : (
    <Button onClick={() => setIsEditing(!isEditing)}>Edit</Button>
  );

  const userNameInput = (
    <CustomInput type="text" placeholder="New Name..." refs={newNameInputRef} />
  );
  const userSurnameInput = (
    <CustomInput
      type="text"
      placeholder="New Surname..."
      refs={newSurnameInputRef}
    />
  );
  const userDisplayName = (
    <CustomInput
      type="text"
      placeholder="New Display Name..."
      refs={newDisplayNameInputRef}
    />
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
            <strong>{props.userSurname}</strong>
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
      {button}
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
    userSurname: state.auth.userSurname,
    userDisplayName: state.auth.userDisplayName,
    registeredFrom: state.auth.registeredFrom,
    userEmail: state.auth.userEmail,
    userId: state.auth.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updDbUserData: (userDbData) => dispatch(updateUserDbData(userDbData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
