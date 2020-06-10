import React, {useState} from "react";
import styled from "styled-components";
import CustomButton from "../../UI/CustomButton/CustomButton";
import {Link} from "react-router-dom";
import * as auth from "../../actions/auth";
import {connect} from "react-redux";

const LoginBox = styled.div`
  border-radius: 1em;
  height: 350px;
  width: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(128, 128, 128, 0.11);
`;

const KeepLoggedDiv = styled.div`
  margin-top: 1em;
`;

const LoginBtnBox = styled.div`
  margin-top: 1em;
  text-align: center;

  input[type="checkbox"] {
    cursor: pointer;
    &:hover {
      border-color: grey;
    }
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input[type="email"],
  input[type="password"] {
    margin: 0.5em auto;
    background: #fff;
    border: 1px solid transparent;
    box-shadow: 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.15);
    border-radius: 3px;
    cursor: pointer;
    box-sizing: border-box;
    height: 36px;
    color: grey;
    text-align: center;
    width: 14rem;

    &:hover {
      border-color: grey;
    }
  }
`;

const SignUpChanger = styled.div`
  align-self: flex-end;
  justify-self: flex-end;
  padding-right: 0.5em;
  margin-top: 1em;
  color: grey;

  button {
    width: 6em;
  }
  span {
    vertical-align: bottom;
    padding: 0 0.5em;
  }
`;

const SignInForm = (props) => {
  const [email, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [keepLogged, setKeepLogged] = useState(false);

  const loginUser = (e) => {
    props.onAuth(email, password);
    e.preventDefault();
  };

  return (
    <LoginBox>
      <h3>Sign in</h3>
      <LoginForm>
        <input
          type="email"
          placeholder="Email Address"
          onChange={(e) => setEmailAddress(e.target.value)}
          autoComplete={"user-email"}
          required
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          autoComplete={"current-password"}
          required
        />

        <LoginBtnBox>
          <CustomButton onClick={loginUser}>Login</CustomButton>
          <KeepLoggedDiv>
            <input
              type="checkbox"
              onChange={() => setKeepLogged(!keepLogged)}
            />
            Keep Logged
          </KeepLoggedDiv>
        </LoginBtnBox>
        <SignUpChanger>
          <span>Do not have account? Register account for free.</span>
          <Link to="/Login/signUp">
            <CustomButton onClick={props.setSignForm}>Sign Up</CustomButton>
          </Link>
        </SignUpChanger>
      </LoginForm>
    </LoginBox>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password) => dispatch(auth.signIn(email, password)),
  };
};

export default connect(null, mapDispatchToProps)(SignInForm);
