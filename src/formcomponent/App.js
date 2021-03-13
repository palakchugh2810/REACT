import React from 'react';
class App extends React.Component{

    constructor()
    {
        
     super();
     this.state={
        firstName :"",
        lastName : "",
        isGraduate: false,
        gender:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.onClick=this.onClick.bind(this);
        this.newChange=this.newChange.bind(this);
    }

    handleChange(event)
    {
        console.log(event.target)
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    newChange(event)
    {
       // console.log(event.target)
        const {name,value,type,checked} =event.target;
        type==="checkbox"?this.setState({[name] : checked}) : this.setState({[name] : value});
    }
    onClick()
    {
        this.setState({

            firstName : "palak"
        });


    }

    render()
    {
        return (
        <div>
            <form>
            <input type="text" name ="firstName" placeholder="firstname" value={this.state.firstName} onChange={this.newChange}/>
            <input type="text" name ="lastName" placeholder="lastName" value={this.state.lastName} onChange = {this.newChange} />
            <label>Is Graduate</label>
            <input type="checkbox" name="isGraduate" value={this.state.isGraduate} onChange={this.newChange}/>
            <label>Male</label>
            <input type="radio" name="gender" value={this.state.gender==="male"} onChange={this.newChange}/>
            <label>Female</label>
            <input type="radio" name="gender" value={this.state.gender==="female"} onChange={this.newChange}/>
            {this.state.firstName} {this.state.lastName} {this.state.isGraduate}{this.state.gender}
            </form>
        </div>
        )

    }
}
export default App