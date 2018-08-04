import {FETCH_TODOLIST} from '../actions/fetchToDoList';


export default function(state=[],action)
{
  switch(action.type)
  {
    case FETCH_TODOLIST: 
      return [action.payload.data];
    default:
      return state;
  }
}