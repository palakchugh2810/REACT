import React, { Component, Fragment } from "react";
class Apps extends Component{

    constructor()
    {
        
     super();
     this.state={
        counter :0,
        button: "click me"
        }
    this.eventHandler=this.eventHandler.bind(this);

    }
   
    eventHandler()
    {
        this.setState((prevstate)=>{
            return{
                counter: prevstate.counter+1
                 }
        });
    }
    render(){
        return(
            <Fragment>
                {this.state.counter}
                <button onClick={this.eventHandler}>{this.state.button}</button>
            </Fragment>
        )
    }
}
export default Apps;