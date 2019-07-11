import { connect } from 'react-redux';
import * as plannerSelectors from '../../redux/plannerSelectors';
import Values from './Values';

const mapStateToProps = state => ({
  budget: plannerSelectors.getBudget(state),
  expenses: plannerSelectors.getTotalExpenses(state),
  balance: plannerSelectors.getBalance(state),
});

export default connect(
  mapStateToProps,
  null,
)(Values);
