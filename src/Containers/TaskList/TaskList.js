import React, {Component} from 'react';
import Task from '../../Components/Task/Task';
import './TaskList.css';
import TaskControls from '../../Components/TaskControls/TaskControls';

class TaskList extends Component{
    state={
        tasks:[{taskID:1, taskName:'random1'},
        {taskID:2, taskName:'random2'},
        {taskID:3, taskName:'random3'},
        {taskID:4, taskName:'random4'}],
        newTask:'',
        taskSearch: '',
        editID: 0
    }
    addTaskHandler = ()=>{
        const taskID = this.state.tasks.length + 1;
        //this.state.tasks.concat({taskID: taskID, taskName: this.state.newTask})
        const updatedArray = this.state.tasks;
        if(this.state.editID === 0){
        updatedArray.push({taskID: taskID, taskName: this.state.newTask});
    }
    else{
        updatedArray.map((task)=>{
            if(this.state.editID === task.taskID){
                task.taskName = this.state.newTask
            }
        })
    }
    this.setState({
        tasks: updatedArray,
        newTask: '',
        editID: 0
    })
        
    }
    newTask = (event)=>{
    this.setState({
        newTask: event.target.value
    })
    }
    taskSearch =(event)=>{
      this.setState({
          taskSearch: event.target.value
      })
    }
    taskEdit = (index)=>{
this.setState({
    newTask: this.state.tasks[index].taskName,
    editID: this.state.tasks[index].taskID
})
    }
    render(){
        const task = this.state.tasks.map((task, index)=>{
            if(!this.state.taskSearch || task.taskName.toLowerCase().match(this.state.taskSearch.toLowerCase()))
            return <Task taskID={task.taskID} taskName={task.taskName} taskEdit={()=>this.taskEdit(index)}/>
        })
return(

    <div className='TaskList'>
    <TaskControls addTask={this.addTaskHandler} newTask={this.newTask} 
    taskSearch={this.taskSearch} taskValue={this.state.newTask}/>
        <table><tr><td>Task ID</td><td>Task Name</td></tr>
        {task}
        </table>
        </div>
)
    }
}
export default TaskList;