import './App.css';
import Square from './Square';
import React, { useState } from 'react';

// const propVariable = 'Square';

// App component
function App() {
  // State variables for game board and player turn
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState(true);

  // Function to handle reset button click
  const handleClick = () => {
    setSquares(["", "", "", "", "", "", "", "", ""]);
    setPlayer(true);
  }

  // Function to calculate the winner
  function calculateWinner(arr) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
        return `${arr[a]} won!`;
      }
    }

    return "Who will win?";
  }

  return (
    <div className="App">
      {/* Display the winner */}
      <span>{calculateWinner(squares)}</span>

      <div className="container">
        {/* Render the Square component for each item in the squares array */}
        {squares.map((val, index) => {
          return (
            <Square
              // propVar={propVariable}
              key={index}
              setSquares={setSquares}
              index={index}
              squareValue={val}
              squares={squares}
              player={player}
              setPlayer={setPlayer}
            />
          );
        })}
      </div>

      {/* Reset button */}
      <button onClick={handleClick}>Reset</button>
    </div>
  );
}

export default App;
