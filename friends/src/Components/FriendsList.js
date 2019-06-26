import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Friend from './Friend'


class FriendsList extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.error('Server Error, Please wait...', error);
      });
  }

  render() {
    return(
      <div className="friend-list">
        {this.state.friends.map(friend => (
          <Friends key={friend.id} friend={friend} />
        ))}
      </div>
    );
  }
}

function Friends({ friend }) {
  return(
    <Link to={`/friends/${friend.id}`}>
      <Friend friend={friend} />
    </Link>
  );
}

export default FriendsList;