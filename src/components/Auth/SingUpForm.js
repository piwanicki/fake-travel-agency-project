import React, {useState} from "react";
import styled from "styled-components";
import CustomButton from "../../UI/CustomButton/CustomButton";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import * as auth from "../../actions/auth";
import SignFormBackdrop from "../../UI/Backdrop/SignFormBackdrop/SignFormBackdrop";
import CustomInput from "../../UI/CustomInput/CustomInput";
import LoadingSpinner from "../../UI/LoadingSpinner/LoadingSpinner";

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
  const [lastName, setLastName] = useState("");

  const confirmPasswordInput = React.createRef();

  const validatePassword = () => {
    console.log(`validation`);
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
    console.log(confirmPassword);
    console.log(password);
    console.log(validatePassword());

    if (validatePassword()) {
      const newUser = {
        email: email,
        password: password,
        firstNme: firstName,
        lastName: lastName,
      };

      props.onSignUp(newUser);
    }
  };

  return (
    <SignFormBackdrop>
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
            <span>Last Name</span>

            <CustomInput
              type="text"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
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
          <LoginBtnBox>
            {props.authPending ? (
              <LoadingSpinner />
            ) : (
              <CustomButton>Sign Up</CustomButton>
            )}
          </LoginBtnBox>
          <SignInChanger>
            <span>Do you have account? Please login.</span>
            <Link to="/Login/signIn">
              <CustomButton onClick={props.setSignForm}>Sign In</CustomButton>
            </Link>
          </SignInChanger>
        </LoginForm>
      </LoginBox>
    </SignFormBackdrop>
  );
};

const mapStateToProps = (state) => {
  return {
    authPending: state.auth.authPending,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSignUp: (email, password) => dispatch(auth.signUp(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
