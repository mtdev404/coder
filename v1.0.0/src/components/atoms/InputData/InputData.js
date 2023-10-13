import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputData = styled.textarea`
  width: 100%;
  height: 100%;
  word-wrap: break-word;
  outline: none;
  border: none;
  resize: none;
  overflow: auto;
  font-family: 'Roboto Mono', monospace;
  font-size: 1.4rem;
  padding: 20px;
`;

export default InputData;
