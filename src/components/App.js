import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BudgetForm from './BudgetForm/BudgetFormContainer';
import ExpenseForm from './ExpenseForm/ExpenseFormContainer';
import ExpensesTable from './ExpensesTable/ExpensesTableContainer';
import Values from './Values/Values';
import * as budgetSelectors from '../redux/budget/budgetSelectors';
import * as expenseSelectors from '../redux/expenses/expensesSelectors';

const Container = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
  align-items: flex-start;
  grid-gap: 24px;
  width: 1000px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
`;

const calculateTotalExpenses = expenses => {
  return expenses.reduce((total, expense) => {
    let acc = total;

    acc += expense.amount;

    return acc;
  }, 0);
};

const calculateBalance = (budget, expenses) => budget - expenses;

const App = ({ expenses, budget }) => {
  const totalExpenses = calculateTotalExpenses(expenses);
  const balance = calculateBalance(budget, totalExpenses);

  return (
    <Container>
      <BudgetForm />
      <Values budget={budget} expenses={totalExpenses} balance={balance} />
      <ExpenseForm />
      <ExpensesTable />
    </Container>
  );
};

App.propTypes = {
  budget: PropTypes.number.isRequired,
  expenses: PropTypes.arrayOf().isRequired,
};
// class App extends Component {
//   propTypes = {
//     budget: PropTypes.number.isRequired,
//     expenses: PropTypes.arrayOf().isRequired,
//   };

//   render() {
//     const { expenses, budget } = this.props;
//     const totalExpenses = calculateTotalExpenses(expenses);
//     const balance = calculateBalance(budget, totalExpenses);

//     return (
//       <Container>
//         <BudgetForm />
//         <Values budget={budget} expenses={totalExpenses} balance={balance} />
//         <ExpenseForm />
//         <ExpensesTable />
//       </Container>
//     );
//   }
// }

const mapStateToProps = state => ({
  budget: budgetSelectors.getBudget(state),
  expenses: expenseSelectors.getExpenses(state),
});

export default connect(
  mapStateToProps,
  null,
)(App);
