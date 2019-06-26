import React from 'react'

function Friend(props) {
  const { name, age, email, friends } = props.friend;
  return(
    <div className="friends-card">
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

export default Friend;