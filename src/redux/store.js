import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { budgetReducer, expensesReducer } from './plannerReducer';

const rootReducer = combineReducers({
  budget: budgetReducer,
  expenses: expensesReducer,
});

const store = createStore(rootReducer, devToolsEnhancer());

export default store;
