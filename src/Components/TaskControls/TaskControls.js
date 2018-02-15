import React from 'react';
import './TaskControls.css'
const taskcontrols = (props)=>{
return(
<div className='TaskControls'>
    <input type='text' placeholder='Enter New Work Item' onChange={props.newTask} value={props.taskValue}/>
    <button onClick={props.addTask}>Enter New Item</button>
    <input type='text' placeholder='Search Task Item' onChange={props.taskSearch}/>
</div>
);
}
export default taskcontrols;