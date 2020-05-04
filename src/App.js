import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './game'
import Score from './score'

class App extends Component {
  
  state = {
    numCorrect: 0
  }

  increaseScoreAsync = event => {
    return new Promise(resolve => this.increaseScore(resolve));
  }

  increaseScore(resolve) {
    this.setState(currentState => ({ numCorrect: currentState.numCorrect + 1 }), resolve);
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <Game onIncreaseScore={this.increaseScoreAsync}/>
          <Score numCorrect={this.state.numCorrect} numQuestions={20}/>
        </div>
      </div>
    );
  }
}

export default App;
