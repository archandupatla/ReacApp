import React from 'react';
import './TaskLayout.css'
const tasklayout = (props)=>{
return(
<div className='TaskLayout'>
    {props.children}
</div>
);
}
export default tasklayout;