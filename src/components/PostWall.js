import React from 'react';
import {publishPost} from '../facebook/facebook';

class PostWall extends React.Component {
  constructor(props){
    super(props);
    this.state = {isLogged : false,
      message : ''
    }
    this.checkLogin = this.checkLogin.bind(this)
    this.submitMessage = this.submitMessage.bind(this)

  }

  checkLogin(e){
    if( window.token ){
       this.setState({isLogged : true});
    } else{
      this.setState({isLogged : false});
    }
  }

  update(e){
    this.setState({ message : e.target.value});
  }

  submitMessage(){
    publishPost(this.state.message);
    this.setState({ sended: "Your message was posted!"})
  }

  render(){
    
    let isLogged = this.state.isLogged;
    return (
      <div>
        <textArea className='form-control' rows='4' onClick = {this.checkLogin} onChange = {this.update.bind(this)}/>
        <button className='btn btn-info btn-block margin-top' onClick = {this.submitMessage}>Post on your Wall</button>
        <div className='fix-height'>
          {this.state.sended}
        </div>
      </div>
    )
  }
}
export default PostWall;