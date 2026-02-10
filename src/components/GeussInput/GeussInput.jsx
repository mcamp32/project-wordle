import React from 'react';

function GeussInput({setGeusses, disabled}) {
  const [geuss, setLocalGeuss] = React.useState('');

  function submitGeuss(event) {
    event.preventDefault();
    console.log('geuss submitted: ', geuss);
    setGeusses(prevGeusses => [...prevGeusses, geuss]);
    setLocalGeuss('');
  }
  
  return <div>
    <form className="guess-input-wrapper" onSubmit={e => submitGeuss(e)}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        id="guess-input" 
        type="text" 
        value={geuss}
        maxLength={5}
        minLength={5}
        disabled={disabled}
        onChange={e => setLocalGeuss(e.target.value)}
      />
    </form>
  </div>;
}

export default GeussInput;