
import axios from 'axios';
export const FETCH_TODOLIST = 'FETCH_TODOLIST';

const baseUrl = 'http://localhost:8081/todo';

export default function fetchTodoList()
{
  const url = baseUrl + '/all';
  const request = axios.get(url);
  return {
    type : FETCH_TODOLIST,
    payload : request
  }
}