import { combineReducers } from 'redux';
import todos from './todos';
import filter from './filter';

const appStore = combineReducers({
  todos,
  filter
});

export default appStore;
