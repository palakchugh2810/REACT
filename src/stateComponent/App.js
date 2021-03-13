import React from 'react';
import Information from './Information'
class App extends React.Component
{

constructor(){
    super();
    this.state=
    {
        myName:"hello",
        email:"palak@gmail.com"
    }
}

render(){

    return(<div>
        <h1>
           <Information user= {this.state} />
        </h1>
    </div>)

}

}
export default App;