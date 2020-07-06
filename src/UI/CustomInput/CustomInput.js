import React, {Component} from "react";
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

class CustomInput extends Component {
  render() {
    return (
      <Input
        type={this.props.type}
        placeholder={this.props.placeholder}
        required={this.props.required}
        onChange={this.props.onChange}
        ref={this.props.refs}
        onBlur={this.props.onBlur}
        autoComplete={this.props.autoComplete}
      />
    );
  }
}

export default CustomInput;
