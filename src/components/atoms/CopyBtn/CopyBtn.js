import React from 'react';
import styled, { css } from 'styled-components';

const CopyBtn = styled.button`
  min-width: 100px;
  border: none;
  outline: none;
  background: transparent;
  color: black;
  text-transform: uppercase;
  font-family: 'Roboto Mono', monospace;
  font-size: 18px;
  padding: 10px;
  &:hover {
    color: #268bd2;
  }
`;

export default CopyBtn;
