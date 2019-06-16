import PropTypes from 'prop-types';
import React from '../../../node_modules/react';
import StyledForm from './Form.styled';

const Form = ({ onSubmit = () => null, children }) => (
  <StyledForm onSubmit={onSubmit}>{children}</StyledForm>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Form;
