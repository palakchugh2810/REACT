import React from 'react';
class Information extends React.Component{


    render(){


        return(<div>
            <h1>

                name:{this.props.user.myName}
            </h1>
            <p>
                email:{this.props.user.email}
            </p>
        </div>)
    }
}
export default Information