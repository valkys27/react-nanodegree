import React from 'react';
import PropTypes from 'prop-types';

function ChatHeader({name, username}) {
  return (
    <div>
      <h2>{name}</h2>
      <div className="name sender">{username}</div>
    </div>
    );
}

ChatHeader.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}

export default ChatHeader