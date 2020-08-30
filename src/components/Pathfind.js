import React, { useState, useEffect } from 'react';
import Node from "./Node";

import "./Pathfind.css";

const cols = 20;
const rows = 19;

const NODE_START_ROW = 0;
const NODE_START_COL = 0;
const NODE_END_ROW = rows - 1;
const NODE_END_COL = cols - 1;

function Pathfind() {
  const [ grid, setGrid ] = useState([]);
  // const [ readout, setReadout ] = useState(null);

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
    getNeighbors(newGrid);
  }

  function getNeighbors (grid) {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        grid[i][j].getNeighbors(grid);
      }
    }
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
    this.neighbors = [];
    this.previous = null;
    this.getNeighbors = function(grid) {
      let x = this.x;
      let y = this.y;
      if (x > NODE_START_ROW) {
        this.neighbors.push(grid[x - 1][y]);
      }
      if (x < NODE_END_ROW) {
        this.neighbors.push(grid[x + 1][y]);
      }
      if (y > NODE_START_COL) {
        this.neighbors.push(grid[x][y - 1]);
      }
      if (y < NODE_END_COL) {
        this.neighbors.push(grid[x][y + 1]);
      }
    }
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
              const { isEnd, isStart, isObstacle, neighbors } = spot;
              return (
                <Node neighbors={neighbors} isEnd={isEnd} isStart={isStart} row={rowIndex} col={colIndex} isObstacle={isObstacle} key={colIndex}></Node>
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
