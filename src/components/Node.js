import React from 'react'

import "./Node.css";

function Node({isEnd, isStart, isActive, isObstacle}) {
  return (
    <div className={
      `node ${isStart ? 'start' : ''} ${isEnd ? 'end' : ''} ${isActive ? 'active' : ''} ${isObstacle ? 'obstacle' : ''}
    `}
    >
      
    </div>
  )
}

export default Node;
