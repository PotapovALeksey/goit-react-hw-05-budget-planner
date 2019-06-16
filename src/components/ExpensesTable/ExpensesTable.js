import PropTypes from 'prop-types';
import React from '../../../node_modules/react';
import Button from '../Button/Button';
import Table from './ExpensesTable.styled';

const ExpensesTable = ({ expenses = [], deleteExpense }) => {
  return (
    expenses.length > 0 && (
      <Table>
        <thead>
          <tr>
            <th>Expense name</th>
            <th>Expense amount</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {expenses.map(({ id, name, amount }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{amount}</td>
              <td>
                <Button label="Delete" onClick={() => deleteExpense(id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    )
  );
};

ExpensesTable.propTypes = {
  deleteExpense: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      amount: PropTypes.number,
    }),
  ).isRequired,
};

export default ExpensesTable;
