import React from 'react'


class ToDoApplication extends React.Component{

render(){
    return(<div>
        <input type='checkbox' checked={this.props.data.completed}/>
        <span>
        {this.props.data.item}
        </span>
        </div>)
}}
export default ToDoApplication;