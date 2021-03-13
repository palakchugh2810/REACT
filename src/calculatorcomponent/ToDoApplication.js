import React from 'react';
class ToDoApplication extends React.Component{
    render(){
        return(<div>
            <form>
            <input type="text" name ="firstNumber" placeholder="firstNumber" value={this.props.state.firstNumber} />
            <input type="text" name ="SecondNumber" placeholder="SecondNumber" value={this.props.state.SecondNumber} />
            <label>Sum</label>
            <button onClick={this.eventHandler}>{this.state.button}</button>
            </form>
            </div>
        )
    }

}
export default ToDoApplication;