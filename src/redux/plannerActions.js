import shortid from 'shortid';

export const ActionType = {
  ADD_EXPENSE: 'ADD_EXPENSE',
  DELETE_EXPENSE: 'DELETE_EXPENSE',
  CHANGE_BALANCE: 'CHANGE_BALANCE',
};

export const addExpense = (name, amount) => ({
  type: ActionType.ADD_EXPENSE,
  payload: { id: shortid.generate(), name, amount },
});

export const deleteExpense = id => ({
  type: ActionType.DELETE_EXPENSE,
  payload: { id },
});

export const changeBalance = value => ({
  type: ActionType.CHANGE_BALANCE,
  payload: { value },
});
