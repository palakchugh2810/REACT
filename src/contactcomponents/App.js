import React from 'react';
import ContactList from './ContactList';
import UserData from './UserData';

function App(){

    var newuser =UserData.map(function(user){
    return <ContactList contact ={user} key={user.id}/>
    });
return(
    <div>
        {newuser}
    </div>
  
)
}
export default App;
