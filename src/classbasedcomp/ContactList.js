import React from 'react'
class ContactList extends React.Component{

render(){

    return(<div>
        <h1>
name:{this.props.contact.name}
        </h1>
        <p>
information:{this.props.contact.info}
        </p>
        <h3>
phone:{this.props.contact.phone}
        </h3>
    </div>);
}

}
export default ContactList;