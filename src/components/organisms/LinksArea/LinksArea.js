import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import NewLinkArea from '../../atoms/NewLinkArea/NewLinkArea';
import Checkbox from '../../molecules/Checkbox/Checkbox';
import CopyBtn from '../../atoms/CopyBtn/CopyBtn';

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

const CopyAllBtn = styled(CopyBtn)`
  align-self: flex-end;
`;

const LinksArea = ({
  uniqueHrefs,
  checkboxes,
  defaultChecked,
  handleCheckbox,
  handleNewLink,
  oneLink,
  copyItem,
}) => (
  <>
    {checkboxes.length !== 0 ? (
      <CopyContainer inside>
        {uniqueHrefs.length === 1 ? null : (
          <CopyAllBtn onClick={() => copyItem(uniqueHrefs.join('\n'))}>
            kopiuj wszystkie
          </CopyAllBtn>
        )}
      </CopyContainer>
    ) : null}
    {uniqueHrefs.map((item) => {
      return (
        <Container key={uniqueHrefs.indexOf(item)}>
          <Container inside>
            <Item>{uniqueHrefs.indexOf(item) + 1}: </Item>
            <Item link>{item}</Item>
            <CopyBtn onClick={() => copyItem(item)}>kopiuj</CopyBtn>
          </Container>
          <Container inside>
            <NewLinkArea
              id={uniqueHrefs.indexOf(item)}
              key={item}
              active={checkboxes.includes(item) && !oneLink}
              disabled={!checkboxes.includes(item) || oneLink}
              onChange={handleNewLink}
              placeholder='http://...'
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
  handleNewLink: PropTypes.func,
  copyItem: PropTypes.func,
};

export default LinksArea;
