import React, {useState} from "react";
import styled from "styled-components";
import * as auth from "../../actions/auth";
import {connect} from "react-redux";
import SignInForm from "./SignInForm";
import SignUpForm from "./SingUpForm";

const Backdrop = styled.div`
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 2rem;
`;

const LoginPage = (props) => {
  const SIGN_IN_FORM = "SIGN_IN";
  const SIGN_UP_FORM = "SIGN_UP";
  const [email, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  // const [keepLogged, setKeepLogged] = useState("");
  const [signForm, setSignForm] = useState(SIGN_UP_FORM);

  const loginHandler = (e) => {
    e.preventDefault();
    props.onAuth(email, password);
  };

  const setSignInForm = () => {
    console.log(signForm)
    setSignForm(SIGN_IN_FORM);
  };

  const setSignUpForm = () => {
    console.log(signForm)
    setSignForm(SIGN_UP_FORM);
  };

  const signInForm = (
    <SignInForm
      loginHandler={loginHandler}
      setEmailAddress={setEmailAddress}
      setPassword={setPassword}
      setSignForm={setSignUpForm}
    ></SignInForm>
  );

  const signUpForm = (
    <SignUpForm
      loginHandler={loginHandler}
      setEmailAddress={setEmailAddress}
      setPassword={setPassword}
      setSignForm={setSignInForm}
    ></SignUpForm>
  );
 
  return (
    <Backdrop>{signForm === SIGN_IN_FORM ? signInForm : signUpForm}</Backdrop>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password) => dispatch(auth.auth(email, password)),
  };
};

export default connect(null, mapDispatchToProps)(LoginPage);
