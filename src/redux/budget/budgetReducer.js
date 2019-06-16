import { ActionType } from './budgetActions';

const budgetReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case ActionType.CHANGE_BALANCE:
      return payload;
    default:
      return state;
  }
};

export default budgetReducer;
