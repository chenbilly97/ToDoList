import React , { Component } from 'react';
import TodoList from './todolist';
import AddTodo from './addToDo';
import DeleteTodo from './deleteTodo';
import UpdateTodo from './updateTodo';

import {BrowserRouter as  Router, DefaultRoute,Route , Switch} from 'react-router-dom';

export default class App extends Component {
  
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/' component={TodoList} />
            <Route path='/all' component={TodoList} />
            <Route path='/add' component={AddTodo} />
            <Route path='/delete/:topic' component={DeleteTodo} />
            <Route path='/update/:topic/:description' component={UpdateTodo} />
          </Switch>
        </Router>
      </div>
    );
  }
}
