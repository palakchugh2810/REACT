import React from 'react';
function Footer(){

    const footStyle={color:"#FF4500"};
    var date = new Date();
    var message="";

    if(date.getTime>'1586072611325')
    {
    console.log("afternoon");
    message="afternoon";
    }
   else if(date.getHours<'3600000')
   {
    console.log("morning");
    message="morning";
   }
    return(
        <footer style={footStyle}>{message}</footer>);
}
export default Footer