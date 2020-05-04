import React, {Component} from 'react'
import './App.css';
import GameControls from './game-controls'
import GameEquation from './game-equation'
import GameUtils from './game-utils'

class Game extends Component {
  
  constructor(props) {
    super(props);
    const [x, y, z, proposedAnswer] = GameUtils.makeNewQuestion();
    this.state = {
      x: x,
      y: y,
      z: z,
      proposedAnswer: proposedAnswer
    }
  }
  
  evaluateAnswer(givenAnswer) {
    const { x, y, z, proposedAnswer } = this.state;
    const corrAnswer = x + y + z;
    return (
      (corrAnswer === proposedAnswer && givenAnswer === true) ||
      (corrAnswer !== proposedAnswer && givenAnswer === false)
    );
  }
  
  updateState(newState) {
    this.setState(currentState => ({
      x: newState[0],
      y: newState[1],
      z: newState[2],
      proposedAnswer: newState[3]
    }));
  }
  
  setNewQuestions() {
    const newState = GameUtils.makeNewQuestion();
    this.updateState(newState);
  }
  
  onChooseAnswer = answer => {
    const answerWasCorrect = this.evaluateAnswer(answer);
    if (answerWasCorrect) {
      this.props.onIncreaseScore().then(() => {
        this.setNewQuestions();
      });
    } else {
      this.setNewQuestions();
    }
  }
  
  render() {
    const {x,y,z,proposedAnswer} = this.state;
    return (
      <div>
        <GameEquation x={x} y={y} z={z} proposedAnswer={proposedAnswer}/>
		<GameControls onAnswerChoose={this.onChooseAnswer}/>
      </div>
    );
  }
}

export default Game