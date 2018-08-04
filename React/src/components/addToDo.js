import React,{Component} from 'react';
import axios from 'axios';

class AddToDo extends Component
{
  
  constructor(props)
  {
    super(props);
    this.state = ({'topic':'','description':''});
    this.onChange = this.onChange.bind(this);
    this.onformSubmit = this.onformSubmit.bind(this);
  }
  render()
  {
    return(
      <div>{this.renderForm()}</div>
    );
  }
  
  onformSubmit(event)
  {
    event.preventDefault();
    const url = 'http://localhost:8081/todo/add';
    const that = this;
    axios({
      method: 'post' ,
      url: url,
      params:{
        topic:this.state.topic,
        description:this.state.description
      }
    }).then(function(res){
       that.setState({'topic':'','description':''});
       that.props.history.push('/all');
     }).catch(function(err){
       console.log(err);
       that.setState({'topic':'','description':''});
       that.props.history.push('/all');
     });
  }
  
  onChange(event)
  {
    event.preventDefault();
    this.setState({[event.target.name]:event.target.value});
  }
  
  renderForm()
  {
    return(
      <div>
        <form className="form">
          <div className="form-group">
            <label>Topic</label>
            <input className="form-control"
                   type="text"
                   placeholder="Please enter topic"
                   value={this.state.topic}
                   name="topic"
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
                  onClick = {this.onformSubmit} >Add </button>
        </form>
      </div>
    );
  }
}

export default AddToDo;