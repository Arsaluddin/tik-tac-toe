import { useState } from 'react';
import './App.css';

function App() {

    const [val,setVal] = useState([]);
    const [flag,setFlag] = useState(true);

    const handleValue = () => {
        flag ? setVal({...val,val :"x"}) : setVal({...val,val :"O"});
        flag ? setFlag(false) : setFlag(true);
    }

  return (
    <div className="App">
      
      <div>
        <div>
          <button className='btn' onClick={handleValue}>{val}</button>
          <button className='btn' onClick={handleValue}>{val}</button>
          <button className='btn' onClick={handleValue}>{val}</button>
        </div>
        <div>
          <button className='btn' onClick={handleValue}>{val}</button>
          <button className='btn' onClick={handleValue}>{val}</button>
          <button className='btn' onClick={handleValue}>{val}</button>
        </div>
        <div>
          <button className='btn' onClick={handleValue}>{val}</button>
          <button className='btn' onClick={handleValue}>{val}</button>
          <button className='btn' onClick={handleValue}>{val}</button>
        </div>
      </div>
      
    </div>
  );
}

export default App;
