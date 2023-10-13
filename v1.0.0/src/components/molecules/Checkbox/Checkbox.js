import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Label = styled.label`
  display: flex;
  font-size: 18px;
  align-self: center;
  text-transform: uppercase;
  padding: 0 10px;
  min-width: 100px;
`;
const Span = styled.span`
  &:hover {
    color: #268bd2;
  }
`;
const Input = styled.input`
  display: block;
  justify-self: center;
  align-self: center;
  width: 24px;
  height: 24px;
  margin: 0 0 0 5px;
`;

const Checkbox = ({ onChange, id, label, defaultChecked }) => (
  <Label htmlFor={id}>
    <Span>{label}</Span>
    <Input
      type='checkbox'
      id={id}
      onChange={onChange}
      defaultChecked={defaultChecked}
    />
  </Label>
);

Checkbox.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
  id: PropTypes.string,
  defaultChecked: PropTypes.bool,
};

export default Checkbox;
