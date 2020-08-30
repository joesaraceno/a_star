import React, { useState, useEffect } from 'react';
import Node from "./Node";

import "./Pathfind.css";

const cols = 20;
const rows = 15;

const NODE_START_ROW = 0;
const NODE_START_COL = 0;
const NODE_END_ROW = rows - 1;
const NODE_END_COL = cols - 1;

function Pathfind() {
  const [ grid, setGrid ] = useState([]);

  useEffect(() => {
    initGrid();
  }, []);
  
  function initGrid() {
    const newGrid = new Array(rows);
    
    for (let i = 0; i < rows; i++) {
      newGrid[i] = new Array(cols);
    }

    createSpots(newGrid);
    setGrid(newGrid);
  }

  function Spot(i, j) {
    this.x = i;
    this.y = j;
    this.g = 0;
    this.f = 0;
    this.b = 0;
    this.isStart = this.y === NODE_START_COL && this.x === NODE_START_ROW;
    this.isEnd = this.y === NODE_END_COL && this.x === NODE_END_ROW;
    this.isObstacle = (!this.isStart && !this.isEnd && Math.random() < 0.2);
    this.isActive = false;
  }

  function createSpots (newGrid) {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        newGrid[i][j] = new Spot(i, j)
      }
    }
  }

  console.log(grid);

  const completeGrid = (
    <div className="grid">
      {grid.map((row, rowIndex) => {
        return (
          <div key={rowIndex} className="row">
            {row.map((spot, colIndex) => {
              const { isEnd, isStart, isObstacle } = spot;
              return (
                <Node isEnd={isEnd} isStart={isStart} isObstacle={isObstacle} key={colIndex}></Node>
              )
            })}
          </div>
        )
      })}
    </div>
  )

  return (
    <div className="wrapper">
      {completeGrid}
    </div>
  ) 
}

export default Pathfind;
