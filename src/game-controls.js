import React from 'react'

function GameControls({onAnswerChoose}) {
  return (
      <div>
      	<button onClick={() => onAnswerChoose(true)}>True</button>
		<button onClick={() => onAnswerChoose(false)}>False</button>
      </div>
    );
}

export default GameControls