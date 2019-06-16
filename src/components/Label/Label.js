import PropTypes from 'prop-types';
import React from '../../../node_modules/react';
import StyledLabel from './Label.styled';

const Label = ({ children, customStyles }) => (
  <StyledLabel customStyles={customStyles}>{children}</StyledLabel>
);

Label.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  ).isRequired,
  customStyles: PropTypes.string.isRequired,
};

export default Label;
