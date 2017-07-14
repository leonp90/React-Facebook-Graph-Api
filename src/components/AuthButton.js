import React from 'react';
import {logIn, logOut, getUserData} from '../facebook/facebook'

class AuthButton extends React.Component {
  constructor(props){
    super(props);
    this.state = { buttonAction : 'btn-primary'}
    this.logIn = logIn.bind(this)
    this.logOut = logOut.bind(this)

  }

  handleClick(){
    this.state.user ? this.logOut() : this.logIn();
  }
  
  render(){
    var text = this.state.user ? 'LogOut' : 'LogIn';
    var buttonAction = 'btn ' + this.state.buttonAction + ' btn-block';
    var status = this.state.userName ? <div>Welcome {this.state.userName}</div> : <div>Must be logged to post!</div>
    return (
      <div>
        <button className={buttonAction} onClick={this.handleClick.bind(this)} >
          {text}
        </button>
        <div className='fix-height'>
          {status}
        </div>
      </div>
      )
  }
}

export default AuthButton

 