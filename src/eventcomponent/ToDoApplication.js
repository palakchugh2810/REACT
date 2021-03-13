import React from 'react'
//import "./App.css";
import styles from "./App.module.css"
class ToDoApplication extends React.Component{

render(){
   
    console.log(this.props.data.completed);
    return(<div>
        <input type='checkbox' 
        checked={this.props.data.completed}
        onChange ={() => this.props.eventHandler(this.props.data.id)}/>
        
       <span className={this.props.data.completed ? styles.completedStyle : styles.notCompletedStyle} >
        {this.props.data.item}
        </span>
        </div>)
}}
export default ToDoApplication;