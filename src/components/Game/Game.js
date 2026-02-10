import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GeussInput from "../GeussInput/GeussInput";
import Geusses from "../Geusses/Geusses";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const NUM_OF_GUESSES_ALLOWED = 6;

function Game() {
  const [geusses, setGeusses] = React.useState([]);
  const isGameOver = geusses.length >= NUM_OF_GUESSES_ALLOWED || geusses[geusses.length - 1] === answer;
  const gameStatus = isGameOver ? (geusses[geusses.length - 1] === answer ? 'won' : 'lost') : 'playing';

  return (
    <div className="game">
      <Geusses geusses={geusses} answer={answer} />
      <GeussInput setGeusses={setGeusses} disabled={isGameOver} />
      <div className={`${gameStatus} banner`}>
        {gameStatus === 'won' && <p>You win!</p>}
        {gameStatus === 'lost' && <p>You lose! The answer was {answer}.</p>}
      </div>  
    </div>
  );
}

export default Game;
