import React from 'react';
import styled from 'styled-components';

const Backdrop = styled.div`
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 2rem;
`;

const SignFormBackdrop = props => {
  return (
    <Backdrop>
      {props.children}
    </Backdrop>
  )
}

export default SignFormBackdrop;