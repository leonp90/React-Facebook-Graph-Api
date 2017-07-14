import React from 'react';
import AuthButton from './AuthButton';
import PostWall from './PostWall';
import {logIn, logOut, getUserData} from '../facebook/facebook'

class App extends React.Component {
  constructor(props){
    super(props);
  
  }

  render(){
    
    return (
      <div>
        <h1>Publish on Facebook!</h1>
        <AuthButton/>
        <PostWall/>

      </div>
    )
  }
}
export default App;