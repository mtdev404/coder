import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Btn = styled.button`
  width: 150px;
  background-color: #ffffff;
  height: 100%;
  border: none;
  outline: none;
  text-transform: uppercase;
  font-size: 1.4rem;
  font-family: 'Roboto Mono';
  border-left: 1px solid #999999;
  border-right: 1px solid #999999;
`;

const Nav = ({ getLinks, getNewCode }) => (
  <nav>
    <Btn onClick={getLinks}>wyświetl linki</Btn>
    <Btn onClick={getNewCode}>generuj kod</Btn>
  </nav>
);

Nav.propTypes = {
  getLinks: PropTypes.func,
  getNewCode: PropTypes.func,
};

export default Nav;
