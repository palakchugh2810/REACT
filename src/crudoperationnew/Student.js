import React from "react";
class Student extends React.Component{
    constructor(){
        super();
        this.onFieldChange = this.onFieldChange.bind(this);
    }
    onFieldChange(event){
        const field = event.target.name;
        const value = event.target.value;

        this.props.handleChange(field, value, this.props.stdnt.id);
    }
    render(){
        return(
            <div>
               <input 
               type = "text" 
               name = "name" 
               value = {this.props.stdnt.name} 
               readOnly = {this.props.stdnt.editable}
               onChange = {(event)=>this.onFieldChange(event, this.props.stdnt.id)}
               />
               <input 
               type = "text" 
               name = "email" 
               value = {this.props.stdnt.email} 
               readOnly = {this.props.stdnt.editable}
               onChange = {(event)=>this.onFieldChange(event, this.props.stdnt.id)}
               />
               <input 
               type = "text" 
               name = "phone" 
               value = {this.props.stdnt.phone} 
               readOnly = {this.props.stdnt.editable}
               onChange = {(event)=>this.onFieldChange(event, this.props.stdnt.id)}
               />
               <button onClick = {()=> this.props.handleUpdate(this.props.stdnt.id)}>
                   {this.props.stdnt.editable?"Edit" : "Save"}
                </button>
               <button onClick = {()=>this.props.handleDelete(this.props.stdnt.id)}>
                   Delete
                </button>
            </div>
        )
    }
}
export default Student;