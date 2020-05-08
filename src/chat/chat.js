import React from 'react';
import PropTypes from 'prop-types';
import ChatHeader from './chat-header';
import ChatMessageList from './message/list/chat-message-list';
import ChatMessageCreate from './message/create/chat-message-create';

function Chat({name, username, messages, onCreateMessageAsync}) {
  return (
    <div className="chat-window">
      <ChatHeader name={name} username={username}/>
      <ChatMessageList username={username} messages={messages}/>
      <ChatMessageCreate onSubmitAsync={onCreateMessageAsync} username={username}/>
    </div>
  );
}

Chat.propTypes = {
  name: PropTypes.string,
  username: PropTypes.string.isRequired,
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired,
  onCreateMessageAsync: PropTypes.func.isRequired
}

Chat.defaultProps = {
  name: 'Chat'
}

export default Chat;