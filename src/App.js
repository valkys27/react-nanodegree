import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from './chat/chat';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [{ username: 'Amy' }, { username: 'John' }];

class App extends Component {
  
  state = {
    messages: [
      { username: 'Amy', text: 'Hi, Jon!' },
      { username: 'Amy', text: 'How are you?' },
      { username: 'John', text: 'Hi, Amy! Good, you?' },
    ]
  }

  onCreateMessageAsync = (text, username) => {
    const newMessage = { username: username, text: text };
    return new Promise(resolve => 
      this.setState(current => ({messages: [...current.messages, newMessage]}), resolve)
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <Chat name='Super Awesome Chat' username={users[0].username} messages={this.state.messages} onCreateMessageAsync={this.onCreateMessageAsync}/>
          <Chat name='Super Awesome Chat' username={users[1].username} messages={this.state.messages} onCreateMessageAsync={this.onCreateMessageAsync}/>
        </div>
      </div>
    );
  }
}

export default App;
