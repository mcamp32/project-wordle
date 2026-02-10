import React from 'react';
import { range } from '../../../utils';
import {checkGuess} from '../../../game-helpers';
function Geuss({ geuss, answer }) {
  const letters = range(5).map(i => geuss[i] || '');
  const checkedLetters = checkGuess(geuss, answer);

  return (<div className="guess">{
    letters.map((letter, index) => <span key={index} className={`cell ${checkedLetters[index].status}`}>{letter}</span>)
  }</div>);
}

export default Geuss;
