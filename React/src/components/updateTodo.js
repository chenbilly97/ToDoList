import React,{Component} from 'react';
import axios from 'axios';

class UpdateTodo extends Component
{
  constructor(props)
  {
    super(props);
    const params = props.match.params;
    this.state = ({'topic':params.topic,'newTopic':params.topic,'description':params.description});
    this.onChange = this.onChange.bind(this);
    this.onformSubmit = this.onformSubmit.bind(this);
  }
  
  onChange(event)
  {
    event.preventDefault();
    this.setState({[event.target.name]:event.target.value});
  }
  
  onformSubmit(event)
  {
    event.preventDefault();
    const url = 'http://localhost:8081/todo/update';
    const that = this;
    axios({
      method : 'post',
      url : url,
      params: {
        topic: that.state.topic,
        newTopic: that.state.newTopic,
        description:that.state.description
      }
    }).then(function(res){
      that.props.history.push('/all');
    }).catch(function(err){
      alert(err);
      that.props.history.push('/all');
    });
  }
  
  renderUpdateForm()
  {
    return(
      <div>
        <form className="form">
          <div className="form-group">
            <label>Topic</label>
            <input className="form-control"
                   type="text"
                   placeholder="Please enter topic"
                   value={this.state.newTopic}
                   name="newTopic"
                   onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input className="form-control"
                   type="text"
                   placeholder="Please enter description"
                   value={this.state.description}
                   name="description"
                   onChange={this.onChange} />
          </div>
          <button className="btn btn-primary"
                  onClick = {this.onformSubmit} >Update</button>
        </form>
      </div>
    );
  }
  
  render()
  {
    return(
      this.renderUpdateForm()
    );
  }
}

export default UpdateTodo;