import React, {Component} from 'react';
import AppHeader from '../app-header';
import ToDoList from '../todo-list';
import SearchPanel from '../search-panel';
import StatusFilter from '../status-filter';
import AddItem from '../add-item';
import './app.css'

export default class App extends Component{
  maxId=100
  state={
    todoData : [
      this.createToDoItem('Drink coffee'),
      this.createToDoItem('Have a lunch'),
      this.createToDoItem('Make a breakfast')
    ],
    term:'',
    filter:''//active, all,done
  };
createToDoItem(label){
  return{
    label,
    important:false,
    done:false,
    id:this.maxId++
  }
}

  deleteItem=(id)=>{
    this.setState(({todoData})=>{
      const idx = todoData.findIndex((el)=>el.id===id);
      // todoData.splice(idx, 1);-qetiyyen olmaz, state-i bu formada silmek
      const newArray=[
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1)
      ];
      return{
        todoData:newArray
      };
    });
  };

  addItemForm=(text)=>{
    const newItem=this.createToDoItem(text)
    this.setState(({todoData})=>{
      const newArr=[
        ...todoData,
        newItem
      ];
      return{
        todoData:newArr
      }
    })
  }
  toggleProperty(arr, id, propName){
    const idx = arr.findIndex((el)=>el.id===id);
      const oldItem = arr[idx];
      const newItem={...oldItem, 
        [propName]:!oldItem[propName]};
        return [
          ...arr.slice(0, idx),
          newItem,
          ...arr.slice(idx + 1)
        ];
}
  onToggleImportant=(id)=>{
    this.setState(({todoData})=>{
      return{
        todoData: this.toggleProperty(todoData, id, 'important')
      }
      })
  }

  onToggleDone =(id)=>{
    this.setState(({todoData})=>{
    return{
      todoData: this.toggleProperty(todoData, id, 'done')
    }
    })
  };

onSearchChange=(term)=>{
  this.setState({term})
};
onFilterChange=(filter)=>{
  this.setState({filter})
};

search(items, term){
    if(term.length===0){
      return items
    }
    return items.filter((item)=>{
      return item.label.toLowerCase().indexOf(term.toLowerCase())>-1
    })
  }

filter(items, filter){
  switch(filter){
    case 'all':
      return items;
    case 'active':
      return items.filter((item)=>!item.done);
    case 'done':
      return items.filter((item)=>item.done);
      default:
        return items;
  }
}

  render(){
    const {todoData, term, filter} = this.state;

    const searchItems = this.filter(this.search(todoData, term),filter);

    const doneCount = todoData.filter((e)=>e.done).length;
                      
    const todoCount = todoData.length - doneCount

    return(
      <div className="todo-app">
       
          <AppHeader toDo={todoCount} done={doneCount}/>
          
          <div className="top-panel">
          <SearchPanel
           onSearchChange = {this.onSearchChange}/>
          <StatusFilter 
          filter={filter}
          onFilterChange={this.onFilterChange}/>
          </div>
         
         
          <ToDoList 
          todos = {searchItems}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}/>
          <AddItem onAdded={this.addItemForm}/>
      </div>
    );
  }
}
 