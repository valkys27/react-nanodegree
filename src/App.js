import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './user/list/user-list';
import CreateUserItem from './user/create/create-user-item';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  
    state = {
    users: [
      {
        firstName: "Evžen",
        lastName: "Oněgin",
        username: "testUser",
        playedGames: 2
      },
      {
        firstName: "Tomáš",
        lastName: "Rosický",
        username: "testUser1",
        playedGames: 8
      },
      {
        firstName: "Karel",
        lastName: "Čapek",
        username: "testUser2",
        playedGames: 3
      }
    ],
    showPlayedGames: false
  }

    addUser = (newUser, event, callback) => {
    event.preventDefault();
    if (this.state.users.find(user => user.username === newUser.username)) {
      callback(event.target, false);
    } else {
      this.setState(currentState => ({users: [...currentState.users, newUser]}));
      callback(event.target, true);
    }
  }   
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
    	<CreateUserItem onAddItem={this.addUser}/>
    	<UserList users={this.state.users} showPlayedGames={this.state.showPlayedGames}/>
      </div>
    );
  }
}

export default App;
