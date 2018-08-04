import axios from 'axios';
import React,{Component} from 'react';

export default class DeleteTodo extends Component
{
  constructor(props)
  {
    super(props);
    this.state = ({'topic': this.props.match.params.topic});
  }
  
  componentWillMount()
  {
    const url = 'http://localhost:8081/todo/delete';
    const that = this;
    axios({
      method : 'post',
      url : url,
      params:{
        topic : this.state.topic
      }
    }).then(function(res){
      that.props.history.push('/all');
    }).catch(function(err){
      alert(err);
      that.props.history.push('/all');
    });
  }
   
   render()
   {
     return (
       <div>Deleting...</div>
     );
   }
}