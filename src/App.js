import './App.css';
import React, { useRef ,useState} from 'react';

function App() {
  const [todoList,settodoList]=useState([]);
  const inputRef=useRef();
  const listhandeler=()=>{
    const text =inputRef.current.value;
    const newitem = {completed:false ,text}
    settodoList([...todoList, newitem]);
    inputRef.current.value="";
  }

   const handlelclick =(index)=>{
     const newtodoList = [...todoList];
     newtodoList[index].completed=!newtodoList[index].completed;
     settodoList(newtodoList);
  }
  const handledelet =(index)=>{
    const newtodoList = [...todoList];
    newtodoList.splice(index ,1);
    settodoList(newtodoList);
 }
  
  console.log(todoList);
  return (
    <div className="App">
       <div className="to-do-container">
      <h1>To Do List App</h1>
      <ul>
        {todoList.map(({text , completed},index) =>{
          return <div className='item'>
          <li className={completed ?"done":" "} key={index} onClick={()=>handlelclick(index)}>{text}</li>
         <span className="delete" onClick={()=>handledelet(index)}>❌</span>
          </div>

        })}
      </ul>
      <input ref={inputRef} placeholder='enter item...' />
      <button onClick={listhandeler}>Add</button>
      </div>
    </div>
  );
}

export default App;
