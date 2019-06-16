export const ActionType = {
  CHANGE_BALANCE: 'CHANGE_BALANCE',
};

export const changeBalance = value => ({
  type: ActionType.CHANGE_BALANCE,
  payload: value,
});
