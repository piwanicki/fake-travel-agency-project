import React, {useState} from "react";
import styled from "styled-components";
import CustomButton from "../../UI/CustomButton/CustomButton";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import * as auth from "../../actions/auth";
import SignFormBackdrop from "../../UI/Backdrop/SignFormBackdrop/SignFormBackdrop";
import CustomInput from "../../UI/CustomInput/CustomInput";
import LoadingSpinner from "../../UI/LoadingSpinner/LoadingSpinner";
import {Redirect} from "react-router-dom";

const LoginBox = styled.div`
  border-radius: 1em;
  height: 450px;
  width: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(128, 128, 128, 0.11);
`;

const LoginBtnBox = styled.div`
  margin-top: 1em;
  text-align: center;
`;

const FlexDiv = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  }
`;

const SignInChanger = styled.div`
  align-self: flex-end;
  justify-self: flex-end;
  padding-right: 0.5em;
  margin-top: 2em;
  color: grey;

  button {
    width: 6em;
  }
  span {
    vertical-align: bottom;
    padding: 0 0.5em;
  }
`;

const SignUpForm = (props) => {
  const [email, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");

  const confirmPasswordInput = React.createRef();
  document.title = "Sign Up";

  const validatePassword = () => {
    if (confirmPassword !== password) {
      confirmPasswordInput.current.setCustomValidity("Passwords Don't Match");
      return false;
    } else {
      confirmPasswordInput.current.setCustomValidity("");
      return true;
    }
  };

  const registerUser = (e) => {
    e.preventDefault();
    if (validatePassword()) {
      const dt = new Date();
      const regFromDt = `${dt.getDate()}/${
        dt.getMonth() + 1
      }/${dt.getFullYear()}`;
      const newUser = {
        email: email,
        password: password,
        userFirstName: firstName,
        userSurname: surname,
        userDisplayName: firstName,
        registeredFrom: regFromDt,
      };
      props.onSignUp(newUser);
    }
  };

  const authRedirect = props.userLogged ? (
    <Redirect to="/userPanel/userInfo" />
  ) : null;

  return (
    <SignFormBackdrop>
      {authRedirect}
      <LoginBox>
        <h3>Sign up</h3>
        <LoginForm onSubmit={registerUser}>
          <FlexDiv>
            <span>First Name</span>
            <CustomInput
              type="text"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </FlexDiv>

          <FlexDiv>
            <span>Surname</span>

            <CustomInput
              type="text"
              placeholder="Surname"
              onChange={(e) => setSurname(e.target.value)}
              required
            />
          </FlexDiv>
          <FlexDiv>
            <span>Email Address (Username)</span>
            <CustomInput
              type="email"
              placeholder="Email Address"
              onChange={(e) => setEmailAddress(e.target.value)}
              autoComplete={"user-email"}
              required
            />
          </FlexDiv>

          <FlexDiv>
            <span>Password</span>

            <CustomInput
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              autoComplete={"current-password"}
              required
            />
          </FlexDiv>
          <FlexDiv>
            <span>Confirm Password</span>

            <CustomInput
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              onBlur={validatePassword}
              autoComplete={"current-password"}
              required
              refs={confirmPasswordInput}
            />
          </FlexDiv>
          {props.authPending ? (
            <LoadingSpinner />
          ) : (
            <>
              <LoginBtnBox>
                <CustomButton>Sign Up</CustomButton>
              </LoginBtnBox>
              <SignInChanger>
                <span>Do you have account? Please login.</span>
                <Link to="/Login/signIn">
                  <CustomButton onClick={props.setSignForm}>
                    Sign In
                  </CustomButton>
                </Link>
              </SignInChanger>
            </>
          )}
        </LoginForm>
      </LoginBox>
    </SignFormBackdrop>
  );
};

const mapStateToProps = (state) => {
  return {
    authPending: state.auth.authPending,
    userLogged: state.auth.userLogged,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSignUp: (newUser) => dispatch(auth.signUp(newUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
