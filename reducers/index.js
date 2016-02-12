import { combineReducers } from 'redux';
import todos from './todos';

const appStore = combineReducers({
  todos
});

export default appStore;
