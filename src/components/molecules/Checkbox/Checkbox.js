import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ onChange, id, label, defaultChecked }) => (
  <label htmlFor={id}>
    <span>{label}</span>
    <input
      type='checkbox'
      id={id}
      onChange={onChange}
      defaultChecked={defaultChecked}
    />
  </label>
);

Checkbox.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
  id: PropTypes.string,
  defaultChecked: PropTypes.bool,
};

export default Checkbox;
