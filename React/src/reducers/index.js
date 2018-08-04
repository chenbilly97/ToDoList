import { combineReducers } from 'redux';
import ToDoListReducer from './reducer_todolist';

const rootReducer = combineReducers({
  todolist:ToDoListReducer
});

export default rootReducer;
