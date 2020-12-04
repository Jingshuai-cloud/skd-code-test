import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilter';
import todos from './todos';
import token from './token';

export default combineReducers({ todos, visibilityFilter, token });
