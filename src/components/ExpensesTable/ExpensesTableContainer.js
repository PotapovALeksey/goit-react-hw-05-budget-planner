import { connect } from 'react-redux';
import * as expenseSelectors from '../../redux/plannerSelectors';
import * as expensesActions from '../../redux/plannerActions';
import ExpensesTable from './ExpensesTable';

const mapStateToProps = state => ({
  expenses: expenseSelectors.getExpenses(state),
});

const mapDispatchToProps = dispatch => ({
  deleteExpense: id => dispatch(expensesActions.deleteExpense(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExpensesTable);
