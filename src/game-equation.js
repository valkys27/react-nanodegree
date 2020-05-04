import React from 'react'
import './App.css';

function GameEquation({x,y,z,proposedAnswer}) {
    return (
      <div className="equation">
            <p className="text">{`${x} + ${y} + ${z} = ${proposedAnswer}`}</p>
      </div>
    );
}

export default GameEquation