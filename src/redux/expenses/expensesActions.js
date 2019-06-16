import shortid from 'shortid';

export const ActionType = {
  ADD_EXPENSE: 'ADD_EXPENSE',
  DELETE_EXPENSE: 'DELETE_EXPENSE',
};

export const addExpense = (name, amount) => ({
  type: ActionType.ADD_EXPENSE,
  payload: { id: shortid.generate(), name, amount: Number(amount) },
});

export const deleteExpense = id => ({
  type: ActionType.DELETE_EXPENSE,
  payload: id,
});
