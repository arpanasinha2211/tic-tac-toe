import { Component } from "react";
import Player from './components/player.jsx'
import GameBoard from "./components/gamBoard.jsx";
function App() {


  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player1" symbol="X" />
          <Player initialName="Player2" symbol="O" />


          {/* <li>
            <span className="player">
              <span className="player-name">Player2</span>
              <span className="player-symbol">O</span>
            </span>
            <button>Edit</button>

          </li> */}
        </ol>
        <GameBoard />
      </div>

    </main>
  );
}

export default App
