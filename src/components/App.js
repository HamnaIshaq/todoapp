import React from 'react';
import Tasks from './Tasks';
import '../css/style.css';

class App extends React.Component {

  state = { 
    task: [],
    currentTask: {
      text: '',
      key: ''
    } 
  };

  onInputChange = (e) => {
    this.setState({
      currentTask: {
        text: e.target.value,
        key: Date.now()
      }
    });
    
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    const newTask = this.state.currentTask;
  
    // input not empty
    if(newTask !== '') {
      const newTasks = [...this.state.task, newTask];
      this.setState({
        task: newTasks,
        currentTask: {
          text: '',
          key: ''
        }
      });
    }
  };

  deleteItemFtn = (key) => {
    const filteredItems = this.state.task.filter(item => item.key !== key);
    this.setState({task : filteredItems});
  };

  render() {
    return(
      <div className="todo-container">
        <header>
          <h1>TODO APP</h1>
        </header>
        <div className="todo-list-container">
          <form className="form" onSubmit={this.onFormSubmit}>
            <input 
              type="text" 
              placeholder="Create a new todo..."
              value={this.state.currentTask.text}
              onChange={this.onInputChange}
              className="form-input"
              />
          </form>
          <Tasks 
            taskItems = {this.state.task}
            deleteItem = {this.deleteItemFtn}
          ></Tasks>
        </div>
      </div>
    );
  }
};

export default App;
