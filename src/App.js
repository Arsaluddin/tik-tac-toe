import { useState,useEffect } from 'react';
import './App.css';

function App() {
    
   const arr = new Array(9).fill(null);

    const [val,setVal] = useState(arr);
    const [flag,setFlag] = useState(true);

    const handleValue = (i) => {
        let string = Array.from(val);
        console.log(val)
        if(string[i])
          return;
        string[i] = flag ? "X" : "O";
        setFlag(!flag);
        setVal(string);
    }

    useEffect(() => {
      let winner = checkWinner();
      if (winner) {
          // clearGame();
          alert(`Ta da ! ${winner} won the Game !`)
      }
  }, [val])

  const checkWinner = () => {
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
      console.log('Class: App, Function: checkWinner ==', val[0], val[1], val[2]);
      for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (val[a] && val[a] === val[b] && val[a] === val[c]) {
              return val[a];
          }
      }
      return null;
  }

  return (
    <div className="App">
      <div className='container'>
      <div>
        <div className='row'>
         <p> <button className='btn' onClick={() => handleValue(0)}>{val[0]}</button></p>
        <p> <button className='btn' onClick={() => handleValue(1)}>{val[1]}</button> </p>
        <p> <button className='btn' onClick={() => handleValue(2)}>{val[2]}</button> </p>
        </div>
         <div className='row'>
         <p> <button className='btn' onClick={() => handleValue(3)}>{val[3]}</button></p>
         <p> <button className='btn' onClick={() => handleValue(4)}>{val[4]}</button></p>
         <p> <button className='btn' onClick={() => handleValue(5)}>{val[5]}</button></p>
        </div>
        <div className='row'>
         <p> <button className='btn' onClick={() => handleValue(6)}>{val[6]}</button></p>
         <p> <button className='btn' onClick={() => handleValue(7)}>{val[7]}</button></p>
         <p> <button className='btn' onClick={() => handleValue(8)}>{val[8]}</button></p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
 