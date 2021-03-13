import React from 'react';
import styles from "./App.module.css"
//import ToDoApplication from "./ToDoApplication"
class App extends React.Component{

    constructor()
    {
        super();
        this.state={
            firstNumber:"",
            SecondNumber:"",
            findSum:" + ",
            findSub:" - ",
            bgColor: 'blue',
            result:0

           // toDoData : ToDoApplication
        }
      this.handleEvent= this.handleEvent.bind(this);
      this.findSum=this.findSum.bind(this);
      this.findSub=this.findSub.bind(this);

      
    }
    handleEvent(event)
    {
        const {name,value} =event.target;
        this.setState({[name]:value});
    }
    findSum(event){
       // this.setState({result:this.state.firstNumber+this.state.SecondNumber})
      //  const sum=parseInt(this.state.firstNumber)+ parseInt(this.state.SecondNumber);
      //  this.setState({result:sum});
       // console.log("button is "+this.state.button)
        
      //  console.log("result is "+this.state.result)
     
        this.setState((prevstate)=>{
            return{
                result: parseInt(this.state.firstNumber)+ parseInt(this.state.SecondNumber),
                bgColor: 'red'
                 }
        });
       // window.location.reload(true);
        // event.preventDefault();
        // return false;
 
    }
    findSub(event){     
         this.setState((prevstate)=>{
             return{
                 result: parseInt(this.state.firstNumber)- parseInt(this.state.SecondNumber)
                  }
         });
        
     }
    
    render(){
        return(<div>
            
            <input type="text" name ="firstNumber" placeholder="firstNumber" value={this.state.firstNumber} onChange={this.handleEvent} />
            <input type="text" name ="SecondNumber" placeholder="SecondNumber" value={this.state.SecondNumber}  onChange={this.handleEvent}/>
             <span className={styles.buttonStyle}></span> 
            {this.state.result}
            <br/>
            <button onClick={this.findSum}>{this.state.findSum}</button>
            <button onClick={this.findSub}>{this.state.findSub}</button>          
            </div>
        )
    }
    
}
export default App;
