
import * as actions from "./ActionType";

export function addStudent(fname,lname)
{
    return{
       // type:"addStudent",
       type:actions.ADD_Student,
        payload:{
            fname:fname,
            lname:lname
        }
    }

}
export function updateStudent(id,fname)
{
    return{
       // type:"addStudent",
       type:actions.UPDATE_Student,
        payload:{
            id:id,
            fname:fname
        }
    }

}
export function deleteStudent(fname)
{
    return{
       // type:"addStudent",
       type:actions.Delete_Student,
        payload:{
            fname:fname
        }
    }

}