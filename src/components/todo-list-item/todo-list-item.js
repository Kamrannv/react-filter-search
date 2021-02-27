import React, {Component} from 'react';
import './todo-list-item.css';

export default class TodoListIem extends Component{
    
  
    
    render(){
        const {label, onDeleted, onToggleImportant, onToggleDone, done, important} = this.props;
        
        let classNames='todo-list-item';
        if(done){
            classNames += ' done'
        }
      if(important){
          classNames +=' important'
      }
        return(
              <span className={classNames}>
              <span
                    className='todo-list-item-label'
                    onClick={onToggleDone}>
                    {label}
             </span>
    
              <button type="button"
                     className="btn btn-outline-secondary btn-sm"
                     onClick={onToggleImportant}>
                     <i className="fa fa-exclamation" />
                     </button>
             <button type="button"
                     className="btn btn-outline-secondary btn-sm"
                     onClick={onDeleted}>
                     <i className="fa fa-trash-o" />
                     </button>
                     </span>
        )
    };
}

// const ToDoListItemFunc =({label, important=false})=>{
//     const liStyle={
//         color:important ? 'red' :'green', 
//         fotnWeight: important ? 'bold' : 'normal'
//     }
//     return(
//         <span className="todo-list-item">
//         <span
//         className='todo-list-item -label'
//          style={liStyle}>
//          {label}
//          </span>

//           <button type="button"
//                  className="btn btn-outline-secondary btn-sm">
//                  <i className="fa fa-exclamation" />
//                  </button>
//          <button type="button"
//                  className="btn btn-outline-secondary btn-sm">
//                  <i className="fa fa-trash-o" />
//                  </button>
//                  </span>
//     )
// }

// export default ToDoListItem;