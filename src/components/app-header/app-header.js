import React from 'react';
import './app-header.css'

const AppHeader =({toDo, done})=>{
 
    return(
      <div className = "app-header d-flex fl">
      <h1>To Do-React</h1>
      <h2>{toDo} more to do, {done} done</h2>
      </div>
      
    )
  }

export default AppHeader;