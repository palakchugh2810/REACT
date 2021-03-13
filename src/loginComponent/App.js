import React from 'react'
import styles from "./App.module.css"
import electro from"../images/blast.jpg"
class App extends React.Component{

    constructor()
    {
        super();
        this.state={
            username:"",
            password:""
        }
        this.handleEvent=this.handleEvent.bind(this);
        this.showAlert=this.showAlert.bind(this);

    }
    handleEvent(event)
    {
        const {name,value} =event.target;//if more than one input types are present, we need to assign values against names
        this.setState({[name]:value})//as they can be called multiple times, need to be stored in array

    }
    componentDidMount(){
        console.log
    }
    showAlert()
    {
        alert("login successful");
    }
    render(){
        const mystyle = {
            color: "red",
            padding: "10px",
            fontFamily:"Arial",
            
          };
          const buttonstyle = {
            color: "red",
            padding: "10px",
            paddingleft:"40px",
            fontFamily: "Arial",
            backgroundColor: "orange",
            width:"140px"
          };
          const wholediv={
            backgroundImage:`url(${electro})`,
            padding:"250px",
          };
         
        return(
        <div style={wholediv}>
            <label style={mystyle}>Enter username</label>
            
            <br/>
            <input type="text" name="username" value={this.state.username} onChange={this.handleEvent}></input>
            <br/>
            <label style={mystyle}> Enter password</label>
            <br/>
            <input type="text" name="password" value={this.state.password} style={{color: "red"}} onChange={this.handleEvent}></input>
            <br/>
            <br/>
            <button  onClick={this.showAlert} style={buttonstyle}>Login</button>
            <span className={styles.user}></span>
        </div>
        )}

}
export default App