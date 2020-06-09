import React, {useState} from "react";
import styled from "styled-components";
import CustomButton from "../../UI/CustomButton/CustomButton";

const Backdrop = styled.div`
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 2rem;
`;

const LoginBox = styled.div`
  border-radius: 1em;
  height: 300px;
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

const LoginPage = (props) => {
  const [email, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [keepLogged, setKeepLogged] = useState("");

  const loginHandler = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    console.log(keepLogged);
  };

  return (
    <Backdrop>
      <LoginBox>
        <h3>Login</h3>
        <LoginForm onSubmit={loginHandler}>
          <input
            type="email"
            placeholder="Email Address"
            onChange={(e) => setEmailAddress(e.target.value)}
            autoComplete={'user-email'}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            autoComplete={'current-password'}
          />

          <LoginBtnBox>
            <CustomButton type="submit">Login</CustomButton>
            <KeepLoggedDiv>
              <input
                type="checkbox"
                onChange={() => setKeepLogged(!keepLogged)}
              />{" "}
              Keep Logged
            </KeepLoggedDiv>
          </LoginBtnBox>
        </LoginForm>
      </LoginBox>
    </Backdrop>
  );
};

export default LoginPage;
