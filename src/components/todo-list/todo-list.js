import React from 'react';
import ToDoListItem from '../todo-list-item';
import './todo-list.css'
const ToDoList =({todos, onDeleted, onToggleImportant, onToggleDone})=>{
   const elements = todos.map((item)=>{
       const{id,...itemProps}  = item; 
       return(
           <li className="list-group-item" key={id}>
            <ToDoListItem 
             {...itemProps}
             onDeleted={()=>onDeleted(id)}
             onToggleImportant={()=>onToggleImportant(id)}
             onToggleDone={()=>onToggleDone(id)}/>
           </li>
       )
   })
    
    return(
    <ul className="list-group todo-list">
        {elements}
    </ul>
    )
  }

  export default ToDoList