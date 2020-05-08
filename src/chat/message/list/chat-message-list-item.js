import React from 'react';
import PropTypes from 'prop-types';

function ChatMessageListItem({index, username, message}) {
  return (
    <li key={index} className={message.username === username ? 'message sender' : 'message recipient'}>
      <p>{`${message.username}: ${message.text}`}</p>
    </li>
  );
}

ChatMessageListItem.propTypes = {
  username: PropTypes.string.isRequired,
  message: PropTypes.shape({
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
}

export default ChatMessageListItem;