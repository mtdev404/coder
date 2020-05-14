/* eslint-disable react/self-closing-comp */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Logo = styled.div`
  width: 180px;
  background-color: #eeeeee;
  height: 100%;
  border: none;
  outline: none;
  text-transform: uppercase;
  font-size: 1.6rem;
  line-height: 40px;
  text-align: center;
  font-family: 'Roboto Mono';
  font-weight: 700;
  border-right: 1px solid #999999;
`;
const Btn = styled.button`
  width: 170px;
  background-color: #eeeeee;
  height: 100%;
  border: none;
  outline: none;
  text-transform: uppercase;
  font-size: 1.4rem;
  font-family: 'Roboto Mono';
  /* border-left: 1px solid #999999; */
  border-right: 1px solid #999999;
`;
const brackets = `<>`;
const Nav = ({ getLinks, getNewCode, clearContent }) => (
  <nav>
    <Logo>{`${brackets} Coder`}</Logo>
    <Btn onClick={getLinks}>
      <i className='fas fa-link'></i> wyświetl linki
    </Btn>
    <Btn onClick={getNewCode}>
      <i className='fas fa-code'></i> generuj kod
    </Btn>
    <Btn onClick={clearContent}>
      <i className='far fa-file'></i> wyczyść wszystko
    </Btn>
  </nav>
);

Nav.propTypes = {
  getLinks: PropTypes.func,
  getNewCode: PropTypes.func,
  clearContent: PropTypes.func,
};

export default Nav;
