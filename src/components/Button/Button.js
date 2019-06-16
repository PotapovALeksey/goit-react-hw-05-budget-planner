import PropTypes from 'prop-types';
import React from '../../../node_modules/react';
import StyledButton from './Button.styled';

const Button = ({ type = 'button', label = '', onClick = () => null }) => (
  <StyledButton type={type} onClick={onClick}>
    {label}
  </StyledButton>
);

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => null,
  type: 'button',
  label: '',
};

export default Button;
