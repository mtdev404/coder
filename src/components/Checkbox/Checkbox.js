import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Checkbox = ({ onChange, id, label, defaultChecked }) => (
  <label htmlFor={id}>
    <input
      type='checkbox'
      id={id}
      onChange={onChange}
      defaultChecked={defaultChecked}
    />
    <span>{label}</span>
  </label>
);

Checkbox.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
  id: PropTypes.string,
  defaultChecked: PropTypes.bool,
};

export default Checkbox;