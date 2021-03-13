import React from 'react'
class App extends React.Component {

    constructor() {
        super()
        this.state = {
            myName: "palak"
        }
        alert("constructor is called");
    }
    componentDidMount() {
        console.log("component did mount");
       // fetch("https://jsonplaceholder.typicode.com/users").then(response()=>response.)
    }
    render() {
        
        return (
            <div>
                <h3>my name is {this.state.myName}</h3>
            </div>
        )

    }
}
export default App