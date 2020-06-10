import React, {useState} from "react";
import styled from "styled-components";
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
  const [signForm, setSignForm] = useState(SIGN_IN_FORM);

  const setSignInForm = () => {
    setSignForm(SIGN_IN_FORM);
  };

  const setSignUpForm = () => {
    setSignForm(SIGN_UP_FORM);
  };

  const signInForm = <SignInForm setSignForm={setSignUpForm}></SignInForm>;

  const signUpForm = <SignUpForm setSignForm={setSignInForm}></SignUpForm>;

  return (
    <Backdrop>{signForm === SIGN_IN_FORM ? signInForm : signUpForm}</Backdrop>
  );
};

export default LoginPage;
