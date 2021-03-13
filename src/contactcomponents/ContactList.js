import React from 'react'
function ContactList(props){

    return(
        <div>
            <h1>
name:{props.contact.name}
            </h1>
            <p>
information:{props.contact.info}
            </p>
            <h3>
phone:{props.contact.phone}
            </h3>
        </div>
    );

}
export default ContactList;