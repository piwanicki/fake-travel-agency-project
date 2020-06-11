import React, {useState} from "react";
import styled from "styled-components";
import CustomButton from "../../UI/CustomButton/CustomButton";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import * as auth from "../../actions/auth";

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
  input[type="email"],
  input[type="password"],
  input[type='text'] {
    margin: 0.5em 0;
    background: #fff;
    border: 1px solid transparent;
    box-shadow: 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.15);
    border-radius: 3px;
    cursor: pointer;
    box-sizing: border-box;
    height: 36px;
    color: grey;
    text-align: center;

    &:hover {
      border-color: grey;
    }
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
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  const validatePassword = () => {
    if (confirmPassword !== password) {
      confirmPasswordInput.current.setCustomValidity("Passwords Don't Match");
       return false;
    } else {
      confirmPasswordInput.current.setCustomValidity("");
     return true;
    }
  };
  const confirmPasswordInput = React.createRef();

  const registerUser = (e) => {
    e.preventDefault();
    console.log(validatePassword());
    if (validatePassword()) {
        const newUser = {
          email: email,
          password: password,
          firstNme: firstName,
          lastName: lastName
        }


      props.onSignUp(newUser);
    }
  };

  return (
    <LoginBox>
      <h3>Sign up</h3>
      <LoginForm onSubmit={registerUser}>
      <FlexDiv>
          <span>First Name</span>
          <input
            type="text"
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </FlexDiv>

        <FlexDiv>
          <span>Last Name</span>

          <input
            type="text"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </FlexDiv>
        <FlexDiv>
          <span>Email Address (Username)</span>
          <input
            type="email"
            placeholder="Email Address"
            onChange={(e) => setEmailAddress(e.target.value)}
            autoComplete={"user-email"}
            required
          />
        </FlexDiv>

        <FlexDiv>
          <span>Password</span>

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            autoComplete={"current-password"}
            required
      
          />
        </FlexDiv>
        <FlexDiv>
          <span>Confirm Password</span>

          <input
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            autoComplete={"current-password"}
            required
            ref={confirmPasswordInput}
          />
        </FlexDiv>
        <LoginBtnBox>
          <CustomButton type='button'>Sign Up</CustomButton>
        </LoginBtnBox>
        <SignInChanger>
        <span>Do you have account? Please login.</span>
        <Link to="/Login/signIn">
          <CustomButton onClick={props.setSignForm}>Sign In</CustomButton>
        </Link>
      </SignInChanger>
      </LoginForm>
    
    </LoginBox>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSignUp: (email, password) => dispatch(auth.signUp(email, password)),
  };
};

export default connect(null, mapDispatchToProps)(SignUpForm);
