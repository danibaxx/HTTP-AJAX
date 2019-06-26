import React from 'react'
import axios from 'axios'

import Friend from './Friend'


class FriendsList extends React.Component {
  constructor(props) {
    super(props);
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
    return <Friend />
  }
}

export default FriendsList;