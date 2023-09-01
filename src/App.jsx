import React, { useState } from 'react'
import ToDoList from './ToDoList';

export default function App() {

  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const eventItems = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems( (oldItem) =>{
      return [...oldItem, inputList]
    } );
    setInputList("");
  };

  const deleteItems = (id) =>{
    setItems((oldItem) =>{
      return oldItem.filter((arrElem, index)=>{
        return index !== id;
      })
    })
}

  return (
    <div  className='main_div'>
      <div className="center_div">
        <br />
        <h1>ToDo List</h1>
        <br />
        <input type="text" placeholder='Add an Item' onChange={eventItems} value={inputList}/>
        <button onClick={listOfItems}>+</button>
        <ol>
          {items.map( (itemsVal, index) =>{
            return <ToDoList 
              key = {index}
              id = {index}
              text = {itemsVal} 
              onSelect = {deleteItems}
              />;
          })}
        </ol>
      </div>    
    </div>
  )
}
