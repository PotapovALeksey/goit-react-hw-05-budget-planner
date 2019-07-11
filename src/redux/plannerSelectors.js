export const getExpenses = state => state.expenses;

export const getBudget = state => state.budget;

export const getTotalExpenses = state => {
  const expenses = getExpenses(state);
  return expenses.reduce((total, expense) => {
    let acc = total;

    acc += expense.amount;

    return acc;
  }, 0);
};

export const getBalance = state => {
  const budget = getBudget(state);
  const expenses = getTotalExpenses(state);

  return budget - expenses;
};
