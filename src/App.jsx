// import { Component } from "react";
import { useState } from "react";
import Player from './components/player.jsx'
import GameBoard from "./components/gamBoard.jsx";
import Log from "./components/log.jsx"

function App() {
  const [gameTurns, setGameTurns] = useState([])
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((currentActivelyPlayer) => currentActivelyPlayer === 'X' ? 'O' : 'X')
    setGameTurns(prevTurns => {
      let currentPlayer = 'X';
      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = "O";
      }
      const updateTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns];
      return updateTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player1" symbol="X" isActive={activePlayer === 'X'} />
          <Player initialName="Player2" symbol="O" isActive={activePlayer === 'O'} />


          {/* <li>
            <span className="player">
              <span className="player-name">Player2</span>
              <span className="player-symbol">O</span>
            </span>
            <button>Edit</button>

          </li> */}
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
      </div>
      <Log />
    </main>
  );
}

export default App
