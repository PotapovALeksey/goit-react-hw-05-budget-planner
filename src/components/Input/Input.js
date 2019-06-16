import PropTypes from 'prop-types';
import React from '../../../node_modules/react';
import StyledInput from './Input.styled';

const Input = ({
  type = 'text',
  value = '',
  onChange = () => null,
  name = '',
}) => <StyledInput type={type} value={value} onChange={onChange} name={name} />;

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
};

Input.defaultProps = {
  name: '',
};

export default Input;
