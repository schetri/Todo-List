// import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react'
import {Button, FormControl, Input, InputLabel} from '@mui/material';
import Todo from './Todo.js';
// import {collection, onSnapshot, query, querysnapshot } from "firebase/firestore";
// import { onSnapshot, collection, query, querySnapshot } from "firebase/firestore";

function App() {
  const [todos, setTodos]=useState([]);
  const [input, setInput]=useState('');


  const addTodo = (event)=>{
    event.preventDefault(); // stops refressing of forms
    console.log("I m clicked");
    setTodos([...todos, input]);
    setInput('');

  }
  return (
    <div className="App">
     <h1>WELCOME TO MY WEB APP</h1>
     <form>
     <FormControl>
        <InputLabel>Write a todo!!</InputLabel>
        <Input type="text" value={input} onChange={event=>setInput(event.target.value)}/>
      </FormControl>

     
     <Button disabled={!input} variant="contained" type="submit" onClick={addTodo}>Add Todo</Button>
     {/* <button type="submit" onClick={addTodo}>Add TODO</button> */}

     </form>
     
     <ul>
      {todos.map(todo=>(
        <Todo text={todo}/>
      ))}
     </ul>
    </div>
  );
}

export default App;
