
function reducer(state=[],action)
{
    let userId=0;
    if(action.type ==="addStudent")
    {
        return[
            ...state,
            {
            id:++userId,
            fname: action.payload.fname,
            lname: action.payload.lname
        }]
    }
    else if(action.type ==="updateStudent")
    {
        return state.map(student=> student.id!== action.payload.id? student:{...state,fname:action.payload.fname});
    }
    else if(action.type ==="deletestudent")
    {
        return state.filter(student =>student.id!==action.payload.id);
    }
    else {
        return state;
    }
}
export default reducer;