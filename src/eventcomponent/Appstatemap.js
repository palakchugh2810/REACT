import React, { Component, Fragment } from "react";
import Tododata from "../todoComponent/ToDoData";
import TodoApp from "./ToDoApplication";

class Appstatemap extends Component{

    constructor()
    {
        
     super();
     this.state={
       tododata: Tododata
        }
    this.eventHandler=this.eventHandler.bind(this);

    }
   
    eventHandler(id)
    {
        this.setState((prevstate)=>{
            const updatedtodos =prevstate.tododata.map(todo =>{
            if(todo.id===id){
                todo.completed = !todo.completed
            }
            return todo
            });
            return{
                tododata :updatedtodos
            }
        });
    }
    render(){

        const todoRender=this.state.tododata.map(item =>
        <TodoApp data={item} key={item.id} eventHandler={this.eventHandler} />
        
            );
        return(
            <Fragment>
                {todoRender}
            </Fragment>
        )
    }
}
export default Appstatemap;