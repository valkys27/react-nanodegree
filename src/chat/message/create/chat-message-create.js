import React from 'react';
import PropTypes from 'prop-types';

class ChatMessageCreate extends React.Component {
  
  propTypes: {
    onSubmitAsync: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired
  }
  
  state = {
    messageText: ""
  }

  updateState(messageText) {
    this.setState({messageText: messageText});
  }

  isDisabled() {
    return this.state.messageText === "";
  }

  onSubmit = e => {
    e.preventDefault();
    return this.props.onSubmitAsync(this.state.messageText, this.props.username)
      .then(() => this.updateState(""));
  }

  onChange = e => {
    this.updateState(e.target.value);
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="input-group">
          <input value={this.state.messageText} onChange={this.onChange} type="text" className="form-control" placeholder="Enter your message..." />
          <div className="input-group-append">
            <button className="btn submit-button" disabled={this.isDisabled()}>
              SEND
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ChatMessageCreate