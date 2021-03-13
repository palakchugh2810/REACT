import React from 'react';
import ToDoData from './ToDoData';
import ToDoApplication from './ToDoApplication';
class App extends React.Component
{
    constructor(){
        super();
        this.state={
            tododata:ToDoData
        }
    }
    
 render()
    {
        const todo=this.state.tododata.map(function(user){
     
        return <ToDoApplication data= {user} />
    });
        return(<div>
            {todo}
        </div>)
    
    }
}
    export default App