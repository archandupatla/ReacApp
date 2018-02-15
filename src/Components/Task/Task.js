import React from 'react';
const task =(props)=>{
    return(
<tr>
<td>{props.taskID}</td><td onClick={props.taskEdit}>{props.taskName}</td>
    </tr>
    )
}
export default task;