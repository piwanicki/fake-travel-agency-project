import React from "react";
import styled from "styled-components";

const Button = styled.button`
  margin: auto;
  width: 10em;
  height: 2.5em;
  box-shadow: inset 0px 0px 15px 3px #feb72b;
  background: linear-gradient(to bottom, #eeb72b 5%, #eeb72b 100%);
  background-color: #eeb72b;
  border-radius: 17px;
  border: 1px solid #eeb72b;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-size: 15px;
  padding: 6px 13px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #feb72b;
  outline: none;
  box-sizing: border-box;

  &:active {
    position: relative;
    top: 1px;
  }
`;

const CustomButton = (props) => {
  return <Button>{props.children}</Button>;
};

export default CustomButton;
