import { ActionType } from './expensesActions';

const expensesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionType.ADD_EXPENSE:
      return [payload, ...state];
    case ActionType.DELETE_EXPENSE:
      return state.filter(item => item.id !== payload);
    default:
      return state;
  }
};

export default expensesReducer;
