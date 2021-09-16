import React, { useState } from "react"
import './App.css';
import Counter from './components/Counter';
import { toggle } from './JS/actions/actionShow'
import { addition } from "./JS/actions/actionAddition";
import { useDispatch, useSelector } from "react-redux"

function App() {
  const [val1, setVal1] = useState(0)
  const [val2, setVal2] = useState(0)

  const show = useSelector(state => state.reducerShow.show)
  const sum = useSelector(state => state.reducerAddition.sum)

  const dispatch = useDispatch()


  return (
    <div className="App">
      <h1>React Redux -- Workshop</h1>
      {/* <button onClick={() => dispatch(toggle())}>
        {show ? "Hid Counter" : "Show Counter"}
      </button>
      {show ? <Counter /> : null} */}
      {/* {show && <Counter />} */}

      <input type="text" onChange={(e)=>setVal1(e.target.value)} />
      <input type="text" onChange={(e)=>setVal2(e.target.value)} />
      <button onClick={()=>dispatch(addition({x: val1, y: val2}))} >+</button>
      <p>{`sum : ${sum}`}</p>
    </div>
  );
}

export default App;
