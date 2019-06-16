import PropTypes from 'prop-types';
import React from '../../../node_modules/react';
import { Container, Label, Value } from './Stats.styled';

const Stat = ({ label, value, isPositive }) => (
  <Container isPositive={isPositive}>
    <Label>{label}</Label>
    <Value>{value}&nbsp;&#x24;</Value>
  </Container>
);

Stat.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  isPositive: PropTypes.bool,
};

Stat.defaultProps = {
  isPositive: false,
};

export default Stat;
