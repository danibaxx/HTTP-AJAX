import React from 'react'

class Friend extends React.Component {
  constructor() {
    super();
    this.state = {
      friend: null
    };
  }

  render() {
    const { name, age, email, friends } = this.state.friend;
    console.log(this.state.friend);
    return(
      <div className="friend-card">
        <h2>Name: {name}</h2>
        <h4>Age: {age}</h4>
        <h3>E-mail: {email}</h3>
        {friends.map(friend => (
          <div key={friend.id} className="friends-id">
            {friend}
          </div>
        ))}
      </div>
    );
  }
}

export default Friend;