import { connect } from 'react-redux';
import BudgetForm from './BudgetForm';
import * as budgetActions from '../../redux/budget/budgetActions';

const mapDispatchToProps = dispatch => ({
  onSave: value => dispatch(budgetActions.changeBalance(value)),
});

export default connect(
  null,
  mapDispatchToProps,
)(BudgetForm);
