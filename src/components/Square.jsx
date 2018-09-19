import React from 'react';

const Square = (props) => {
  let squareStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  }
  return (
    <div style={ squareStyle }>
      <p>X</p>
    </div>
  )
}

export default Square;
