import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  padding: 20px;
`;

const Item = styled.div`
  color: #b58900;
  word-wrap: break-word;
  ${({ link }) =>
    link &&
    css`
      color: #2aa198;
      max-width: 500px;
      padding: 0 0 0 5px;
    `}
`;

const Copy = styled.button`
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

const copyHref = (item) => {
  const tempContainer = document.querySelector('.temp');
  const tempArea = document.createElement('textarea');
  tempContainer.appendChild(tempArea);
  tempArea.textContent = item;
  tempArea.select();
  document.execCommand('copy');
  tempContainer.removeChild(tempArea);
};

const LinksArea = ({ uniqueHrefs }) => (
  <>
    {uniqueHrefs.map((item) => (
      <Container key={uniqueHrefs.indexOf(item)}>
        <Item>{uniqueHrefs.indexOf(item) + 1}: </Item>
        <Item link>{item}</Item>
        <Copy onClick={() => copyHref(item)}>kopiuj</Copy>
      </Container>
    ))}
  </>
);

LinksArea.propTypes = {
  uniqueHrefs: PropTypes.array,
};
export default LinksArea;

const copyPassword = () => {
  const pass = document.getElementsByTagName('article')[0];
  const tempArea = document.createElement('textarea');
  pass.appendChild(tempArea);
  tempArea.textContent = pass.textContent;
  tempArea.select();
  document.execCommand('copy');
  pass.removeChild(tempArea);
};
