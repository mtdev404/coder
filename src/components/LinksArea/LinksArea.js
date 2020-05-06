import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import NewLinkArea from '../NewLinkArea/NewLinkArea';
import Checkbox from '../Checkbox/Checkbox';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  ${({ inside }) =>
    inside &&
    css`
      flex-direction: row;
      padding: 15px;
    `};
`;

const CopyContainer = styled(Container)`
  justify-content: flex-end;
`;

const Item = styled.div`
  align-self: center;
  color: #b58900;
  width: 80%;
  word-wrap: break-word;

  ${({ link }) =>
    link &&
    css`
      color: #2aa198;
      padding: 0 0 0 5px;
    `}
`;

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

const CopyAllBtn = styled(CopyBtn)`
  align-self: flex-end;
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

const LinksArea = ({
  uniqueHrefs,
  checkboxes,
  defaultChecked,
  handleCheckbox,
  oneLink,
}) => (
  <>
    {checkboxes.length !== 0 ? (
      <CopyContainer inside>
        <CopyAllBtn onClick={() => copyHref(checkboxes.join('\n'))}>
          kopiuj wszystkie
        </CopyAllBtn>
      </CopyContainer>
    ) : null}
    {uniqueHrefs.map((item) => {
      return (
        <Container key={uniqueHrefs.indexOf(item)}>
          <Container inside>
            <Item>{uniqueHrefs.indexOf(item) + 1}: </Item>
            <Item link>{item}</Item>
            <CopyBtn onClick={() => copyHref(item)}>kopiuj</CopyBtn>
          </Container>
          <Container inside>
            <NewLinkArea
              key={item}
              active={checkboxes.includes(item) && !oneLink}
              disabled={!checkboxes.includes(item) || oneLink}
            />
            <Checkbox
              id={item}
              label='zamień'
              defaultChecked={defaultChecked}
              onChange={handleCheckbox}
            />
          </Container>
        </Container>
      );
    })}
  </>
);

LinksArea.propTypes = {
  uniqueHrefs: PropTypes.array,
  checkboxes: PropTypes.array,
  defaultChecked: PropTypes.bool,
  handleCheckbox: PropTypes.func,
  oneLink: PropTypes.bool,
};

export default LinksArea;
