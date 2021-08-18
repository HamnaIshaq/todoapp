import React from 'react';
import '../css/style.css';
import IconCross from '../images/icon-cross.svg';

const addNewTasks = (props) => {
  const items = props.taskItems;
  return items.map(task => {
    return <div className="task-list-div" key={task.key}>
      <li className="task-list-item">
        <span className="task-done"></span>
        {task.text}
        <span onClick={() => props.deleteItem(task.key)}>
          <img className="delete-task" src={IconCross} alt="delete icon"/>
        </span>
      </li> 
    </div> 
  });
  
}

const Tasks = (props) => {

  const taskList = addNewTasks(props);
  
  return(
    <ul className="task-list">
      {taskList}
    </ul>
  );
}

export default Tasks;
