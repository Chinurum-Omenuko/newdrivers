
import './App.css'
import { useState } from 'react';

function Game() {

  return (
    <>
      <h1>Tic-Tac-Toe</h1>
      <Board />
    </>
    
  );
}

function Board(){
  return(
    <div className="board-grid">
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </div>
  );
}

function Square(){
  const [value, setValue] = useState(null);

  function change(){
    setValue('x')
  }

  return(
    <button className="btn" onClick={change}>{value}</button>
  );
}

export default Game
