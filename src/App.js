import React, { useReducer } from 'react';
import './App.css';

function App() {
  const inputRef = React.useRef(null); 
  const resultRef = React.useRef(null);
  
  const reducer = (state, action) => {
    switch (action.type) {
  
    case "add":
      return { result: state.result + Number(inputRef.current.value)}
    case "minus":
      return { result: state.result - Number(inputRef.current.value)}
    case "times":
      return { result: state.result * Number(inputRef.current.value)}
    case "divide":
      return { result: state.result / Number(inputRef.current.value)}
    case "resetInput":
      inputRef.current.value = 0;
      return { result: state.result}
  
    default:
      return {result: 0}
    }
  };

  const initialState = {result: 0};
  const [state, dispatch] = useReducer(reducer, initialState);
  

  return (
    <div className="App"> 
      <div> 
        <h1>Simplest Calculator With useReducer</h1> 
      </div> 
      <form className="form"> 
      <div>
        <p ref={resultRef}> 
          {state.result} 
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
      </div>
      <div className="buttons">
        <button  className="oper" onClick={(e) => {e.preventDefault(); dispatch({type:'add'})}}>add</button> 
        <button  className="oper" onClick={(e) => {e.preventDefault(); dispatch({type:'minus'})}}>subtract</button> 
        <button  className="oper" onClick={(e) => {e.preventDefault(); dispatch({type:'times'})}}>multiply</button> 
        <button  className="oper" onClick={(e) => {e.preventDefault(); dispatch({type:'divide'})}}>divide</button> 
        <button  className="reset" onClick={(e) => {e.preventDefault(); dispatch({type:'resetInput'})}}>reset input</button> 
        <button  className="reset" onClick={(e) => {e.preventDefault(); dispatch({type:''})}}>reset result</button> 
      </div>
      </form> 
    </div> 
  )
}

export default App
