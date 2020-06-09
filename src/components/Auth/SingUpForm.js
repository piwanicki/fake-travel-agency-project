import React from "react";
import styled from "styled-components";
import CustomButton from "../../UI/CustomButton/CustomButton";
import {Link} from "react-router-dom";

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
    margin: 1em auto;
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

const SignInChanger = styled.div`
  align-self: flex-end;
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
  return (
    <LoginBox>
      <h3>Sign up</h3>
      <LoginForm onSubmit={props.signUpHandler}>
        <input
          type="email"
          placeholder="Email Address"
          onChange={(e) => props.setEmailAddress(e.target.value)}
          autoComplete={"user-email"}
          required
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => props.setPassword(e.target.value)}
          autoComplete={"current-password"}
          required
        />

        <LoginBtnBox>
          <CustomButton type="submit">Login</CustomButton>
          <KeepLoggedDiv>
            <input
              type="checkbox"
              onChange={(e) => props.setKeepLogged(e.target.value)}
            />{" "}
            Keep Logged
          </KeepLoggedDiv>
        </LoginBtnBox>
      </LoginForm>
      <SignInChanger >
        <span onClick={props.setSignForm}>Do you have account? Please login</span>
        <Link to="/Login/signIn">
          <CustomButton onClick={props.setSignForm}> Sign In</CustomButton>
        </Link>
      </SignInChanger>
    </LoginBox>
  );
};

export default SignInForm;
