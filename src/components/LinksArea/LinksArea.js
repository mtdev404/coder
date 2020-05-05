import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Checkbox from '../Checkbox/Checkbox';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  ${({ inside }) =>
    inside &&
    css`
      flex-direction: row;
      flex-wrap: wrap;
      padding: 15px;
    `};
`;

const Item = styled.div`
  align-self: center;
  color: #b58900;
  word-wrap: break-word;

  ${({ link }) =>
    link &&
    css`
      max-width: 700px;
      color: #2aa198;
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

const NewLink = styled.textarea`
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
  width: 100%;
  max-width: 700px;
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

const LinksArea = ({ uniqueHrefs, checkboxes, defaultChecked, onChange }) => (
  <>
    {uniqueHrefs.map((item) => {
      const itemName = `${item}`;
      return (
        <Container key={uniqueHrefs.indexOf(item)}>
          <Container inside>
            <Item>{uniqueHrefs.indexOf(item) + 1}: </Item>
            <Item link>{item}</Item>
            <Copy onClick={() => copyHref(item)}>kopiuj</Copy>
          </Container>
          <Container inside>
            {checkboxes.includes(item) ? <NewLink /> : null}
            <Checkbox
              id={item}
              label='zamień'
              defaultChecked={defaultChecked}
              onChange={onChange}
            />
          </Container>
        </Container>
      );
    })}
  </>
);

LinksArea.propTypes = {
  uniqueHrefs: PropTypes.array,
  checkboxes: PropTypes.object,
  defaultChecked: PropTypes.bool,
  onChange: PropTypes.func,
};
export default LinksArea;
