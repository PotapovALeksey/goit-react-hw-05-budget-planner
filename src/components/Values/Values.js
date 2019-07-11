import styled from 'styled-components';
import PropTypes from 'prop-types';
import React from '../../../node_modules/react';
import Stat from '../Stats/Stats';

const Container = styled.section`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;
//
const Values = ({ budget, expenses, balance }) => (
  <Container>
    <Stat label="Budget" value={budget} isPositive />
    <Stat label="Expenses" value={expenses} />
    <Stat
      label="Balance"
      value={balance.toFixed(2)}
      isPositive={balance >= 0}
    />
  </Container>
);

Values.propTypes = {
  budget: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  expenses: PropTypes.number.isRequired,
  balance: PropTypes.number.isRequired,
};

export default Values;
