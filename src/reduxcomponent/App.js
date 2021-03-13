import React from "react";
import { addStudent, updateStudent, deleteStudent } from "./Action";
import store from "./Store";
class App extends React.Component {
    constructor() {

        super();
        this.state = {
            counter: [],
            button: "click me"
        }
        this.eventHandler = this.eventHandler.bind(this);

    }

    eventHandler() {

        // const count=""
        // const todo=store.getState().map(function(user){

        //     return  {user} });

        //     this.setState((prevstate)=>{
        //     return{
        //         counter: todo
        //          }
        // });
    }
    render() {
        
        store.subscribe(() => {
            console.log("currentStore", store.getState());

        }
        )
       
        store.dispatch(addStudent("palak", "chugh"));
        store.dispatch(addStudent("palak1", "chugh1"));
        store.dispatch(updateStudent(1,"hello"));
        store.dispatch(deleteStudent("hello"));

        console.log("currentStore", store.getState());
        const stu=store.getState();
        const todo=stu.map((user) => {

            return  user.fname
        });
    
        return (
            <div>
                hello
                {JSON.stringify(todo)}
            </div>
        )
    }
}

export default App;