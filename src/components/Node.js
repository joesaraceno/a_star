import React from 'react'

import "./Node.css";

function Node({isEnd, isStart, row, col, isActive, isObstacle, neighbors}) {
  function printNeighbors() {
    console.log(neighbors);
  }
  return (
    <div
      onClick={printNeighbors}
      className={`node${isStart ? ' start' : ''}${isEnd ? ' end' : ''}${isActive ? ' active' : ''}${isObstacle ? ' obstacle' : ''}`}
      id={`node-${row}-${col}`}
    >
      {row},{col}
      </div>
  )
}

export default Node;
