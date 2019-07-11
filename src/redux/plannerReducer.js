import { ActionType } from './plannerActions';

export const expensesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionType.ADD_EXPENSE:
      return [payload, ...state];
    case ActionType.DELETE_EXPENSE:
      return state.filter(item => item.id !== payload.id);
    default:
      return state;
  }
};

export const budgetReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case ActionType.CHANGE_BALANCE:
      return payload.value;
    default:
      return state;
  }
};
