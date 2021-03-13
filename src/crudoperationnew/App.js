import React from "react";

import StudentData from "./StudentData"
import Student from "./Student";

import $ from "jquery";
import "./App.css"

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            student :StudentData
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
    }

    handleChange(name, value, id)
    {
       this.setState(currentState =>{
            const updatedState = currentState.student.map(ustd =>{
                if(ustd.id ===id)
                {
                    ustd[name] = value
                }
                return ustd
            });
            return{
                student : updatedState
            }
        });
        console.log(this.state.student);
    }
    handleDelete(id)
    {
       const studentToBeDeleted = this.state.student.filter(item =>{
           return(
               item.id !== id
           )
       });
       this.setState({
           student : studentToBeDeleted
       });
    }
    handleUpdate(id)
    {
        this.setState(prevState =>{
            const newStudent = prevState.student.map(uStudent =>{
                if(uStudent.id === id)
                {
                    uStudent.editable = !uStudent.editable
                }
                return uStudent
            });
            return{
                student:newStudent
            }
        });
    }
    handleCreate(event)
    {
        event.preventDefault();
        var newArray = {
            id : event.target.id.value,
            name : event.target.name.value,
            email : event.target.email.value,
            phone : event.target.phone.value,
            editable : true
        };
        this.setState({
            student : [...this.state.student, newArray]
        });
        localStorage.setItem("Student",JSON.stringify([...this.state.student, newArray]));
    }
    componentDidMount()
    {
        const savedData = JSON.parse(localStorage.getItem("Student"));
        savedData ? this.setState({ student: savedData }): this.setState({student :StudentData })
    }
    showForm()
    {
        $("#addButton").on("click", ()=>{
            $(".hide").toggle("slow");
            $("#addButton").hide();
        });
    }
    render()
    {
        const student = this.state.student.map((item)=>{
            return(
                <Student stdnt ={item} 
                key = {item.id}
                handleChange = {this.handleChange}
                handleDelete = {this.handleDelete}
                handleUpdate = {this.handleUpdate} />
            )
        });
        return(
            <div>
                <h1>Student Information</h1>
               {student}
               <h3>Add Student</h3>
               <form onSubmit = {this.handleCreate} className="hide">
                   <input type = "text"
                   name = "id"
                   placeholder = "Id"
                   />
                   <input type = "text"
                   name = "name"
                   placeholder = "Name"
                   />
                   <input type = "text"
                   name = "email"
                   placeholder = "email"
                   />
                   <input type = "text"
                   name = "phone"
                   placeholder = "Phone"
                   />
                   <button>Add Student</button>
               </form>
               <button id="addButton" onClick={this.showForm}>Add Student</button>
            </div>

        )
    }
}

export default App;
