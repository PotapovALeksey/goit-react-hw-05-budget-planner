import { connect } from 'react-redux';
import * as expensesActions from '../../redux/expenses/expensesActions';
import ExpenseForm from './ExpenseForm';

const mapDispatchToProps = dispatch => ({
  addExpense: (name, amount) =>
    dispatch(expensesActions.addExpense(name, amount)),
});

export default connect(
  null,
  mapDispatchToProps,
)(ExpenseForm);
