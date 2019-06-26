import React from 'react'
import { Route } from 'react-router-dom' 

import FriendsList from './Components/FriendsList'
import AddFriend from './Components/AddFriend'

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      addFriend: []
    };
  }

  render() {
    return (
      <div className="App">
        <AddFriend add={this.state.addFriend} />
        <Route exact path='/' component={FriendsList} />
      </div>
    );
  }
}

export default App;
