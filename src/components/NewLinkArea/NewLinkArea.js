import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const NewLinkArea = styled.textarea`
  align-self: center;
  color: #b58900;
  word-wrap: break-word;
  outline: none;
  border: none;
  resize: none;
  font-size: 14px;
  color: black;
  padding: 10px;
  height: 40px;
  width: 90%;
  background-color: #eeeeee;
  ${({ active }) =>
    active &&
    css`
      background-color: white;
    `};
`;

export default NewLinkArea;
