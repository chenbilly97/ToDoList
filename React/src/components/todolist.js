import React , {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import fetchTodoList from '../actions/fetchToDoList';
import {Link} from 'react-router-dom';

class TodoList extends Component {
  
  constructor(props)
  {
    super(props);
  }
  
  componentWillMount()
  {
    this.props.fetchTodoList();
  }

  render(){
    return (
      <div>{this.renderToDoTable()}</div>
      );
  }
  
  renderToDoTable()
  {
    if (this.props.todolist.length==0)
      return <div>Loading...</div>
      
    return(
      <div>
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Topic</th>
              <th>Description</th>
              <th>Date</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
             {this.props.todolist[0].map(this.renderToDoEntry)}
          </tbody>
        </table>
        <Link to='/add'><button className="btn btn-primary">Add</button></Link>
      </div>
    );
  }
  
  renderToDoEntry(todo)
  {
    const updateUrl = `/update/${todo.topic}/${todo.description}`;
    const deleteUrl = `/delete/${todo.topic}`;
    return(
      <tr key={todo.topic}>
        <td>{todo.topic}</td>
        <td>{todo.description}</td>
        <td>{todo.date}</td>
        <td><a type="button" href={updateUrl} className="btn btn-warning">Update</a></td>
        <td><a type="button" href={deleteUrl} className="btn btn-warning">Delete</a></td>
      </tr>
    );
  }
}

  function mapDispatchToProps(dispatch)
  {
     return bindActionCreators({fetchTodoList},dispatch);
  }
  
  function mapStateToProps({todolist})
  {
    return {todolist};
  }
  
export default connect (mapStateToProps,mapDispatchToProps)(TodoList);
