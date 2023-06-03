import React from 'react';

// Square component
const Square = (props) => {
   // console.log(props.squares, props.player);
   
  // Function to handle square click
  const handleClick = () => {
    if (!props.squareValue) {
      if (props.player) {
        props.squares.splice(props.index, 1, "X");
        props.setSquares(props.squares);
        props.setPlayer(!props.player);
      } else {
        props.squares.splice(props.index, 1, "O");
        props.setSquares(props.squares);
        props.setPlayer(!props.player);
      }
    }
  };

  return (
    /* {props.squares[0]} */
    <div className="square" onClick={handleClick}>
      {/* Render the square value (X, O) or the Devmountain logo */}
      {props.squareValue === "O" ? 
        <img src="https://cdn.discordapp.com/attachments/830137099042816080/984895322184634448/devcircle_1.png" alt="O" /> : props.squareValue}
    </div>
  );
};

export default Square;
