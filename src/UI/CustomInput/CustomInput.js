import React from "react";
import styled from "styled-components";

const Input = styled.input`
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
  width: 13rem;

  &:hover {
    border-color: grey;
  }
`;

const CustomInput = (props) => {
  return (
    <Input
      type={props.type}
      placeholder={props.placeholder}
      required={props.required}
      onChange={props.onChange}
      ref={props.refs}
      onBlur={props.onBlur}
      autoComplete={props.autoComplete}
    />
  );
};

export default CustomInput;
