import React from 'react'

class Helper extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "palak"
        }
        alert("constructor is called");
        this.handleChange = this.handleChange.bind(this);

    }
    componentDidMount() {
    }
    // static getDerivedStateFromProps(props) {
    //     alert("get derived called")
    //     return {
    //         name: props.name
    //     }
    // }

    shouldComponentUpdate(){
        return true;
    }
    handleChange() {
        this.setState({
            name: "hello"

        });


    }
    render() {

        return (
            <div>
                <button onClick={this.handleChange}>should change state</button>
                <h3>my name is {this.state.name}</h3>
            </div>
        )

    }
}
export default Helper;
