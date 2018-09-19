import React from 'react';
import Square from './Square';

const Board = (props) => {

  const boardStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridTemplateRows: "1fr 1fr 1fr",
    backgroundColor: "black",
    gridGap: "5px",
    width: "600px",
    height: "600px"
  }

  const createBoard = () => {
    let board = [];
    for (let i = 0; i < 9; i++) {
      board.push(<Square key={i} />);
    }
    console.log(board);
    return board;
  }

  return (
    <div style={ boardStyle }>
      { createBoard() }
    </div>
  )
}

export default Board;
