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
  value: PropTypes.string.isRequired,
  isPositive: PropTypes.bool.isRequired,
};

export default Stat;
