// import React, {useState} from 'react';
import './App.css';
import Counter from './Counter';
function App() {
  const [name,setName] = useState('');
  const [print,setPrint] = useState(false);
  function getName(val) {
    setName(val.target.value)
    console.log(val.target.value);
  }
  return (
    <>
    <div className="App">
      <h1>React Test</h1>
    {
      print ? <h2>{name}</h2> : null
    }
    <input type="text" onChange={getName} placeholder="Enter your name" />
    <button onClick={()=>setPrint(true)}>Submit</button>
    </div>
    <Counter />
    </>
  );
}

export default App;
