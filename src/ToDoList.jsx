import React from 'react'

const ToDoList = (props) =>{

    

    return(
        <>
            <div className="fa">
                <p onClick={() =>{
                    props.onSelect(props.id)
                }}>x</p>
                <li> {props.text} </li> 
            </div>
        </>
    );
    
};

export default ToDoList;