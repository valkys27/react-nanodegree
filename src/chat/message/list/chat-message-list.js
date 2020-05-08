import React from 'react';
import PropTypes from 'prop-types';
import ChatMessageListItem from './chat-message-list-item';

function ChatMessageList({username, messages}) {
  return (
    <ul className="message-list">
      {messages.map((message, index) => (<ChatMessageListItem key={index} index={index} username={username} message={message}/>))}
     </ul>
  );
}

ChatMessageList.propTypes = {
  username: PropTypes.string.isRequired,
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired
}

export default ChatMessageList;