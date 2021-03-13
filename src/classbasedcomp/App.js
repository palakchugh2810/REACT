import React from 'react';
import ContactList from './ContactList'
import UserData from "../contactcomponents/UserData"
class App extends React.Component
{


    render()
    {
        var newuser=UserData.map(function(user){

        
        return <ContactList contact= {user} />
    });
    
    return(
        <div>
            {newuser}
        </div>)
    }
}
export default App;