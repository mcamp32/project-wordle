import React from 'react';
import Geuss from './Geuss/Geuss';


function Geusses({ geusses, answer }) {
  return (
    <div className="guess-results">
      {geusses.map((geuss, index) => (
        <Geuss key={index} geuss={geuss} answer={answer} />
      ))}
    </div>
  );
}

export default Geusses;
