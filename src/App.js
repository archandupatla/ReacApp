import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header'
import TaskLayout from './Components/TaskLayout/TaskLayout'
import TaskControls from './Components/TaskControls/TaskControls';
import TaskList from './Containers/TaskList/TaskList'

class App extends Component {
  render() {
    return (
      <div className="App">
<Header/>
<TaskLayout>
{/* <TaskControls/> */}
<TaskList/>
  </TaskLayout>
       </div>
    );
  }
}

export default App;
