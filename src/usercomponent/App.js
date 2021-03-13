import React from 'react';
import ToDoData from './ToDoData';
import ToDoApplication from './ToDoApplication';
import $ from jQuery;he
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            tododata: ToDoData,
            buttonAdd: "Add user",
            buttonDel: "Dlete user",
            defaultCheck: false
        }
        this.addUser = this.addUser.bind(this);
    }
    addUser() {

        const todo = this.state.tododata.map(function (users) {

        });

        console.log("value of completed" + this.state.tododata.completed);
    }
    // inheritedMethod(){


    // }

    // checked(event){
    //     const {name,value,type,checked} =event.target;
    //     type==="checkbox"?this.setState({[name] : checked}) : this.setState({[name] : value});
    // }
    render() {
        const todo = this.state.tododata.map(function (users) {

            return <ToDoApplication data={users} />
        });
        return (<div>
            {todo}
            <br />
            <button onClick={this.props.addUser}>AddUser</button>
            <button onClick={this.props.buttonDel}>Delete User</button>
        </div>)

    }
}
export default App
