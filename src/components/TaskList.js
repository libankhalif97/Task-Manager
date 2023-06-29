import React from 'react';

const TaskList = ({ tasks, completeTask, deleteTask, handleSearch }) => {
  return (
    <div>
      <div className="search">
        <input
          type="text"
          placeholder="Search tasks..."
          onChange={handleSearch}
        />
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            <div className="task-header">
              <span>{task.title}</span>
              <div>
                <button onClick={() => completeTask(index)}>
                  {task.completed ? 'Undo' : 'Complete'}
                </button>
                <button onClick={() => deleteTask(index)}>Delete</button>
              </div>
            </div>
            {task.description && (
              <div>
                <p>Description: {task.description}</p>
              </div>
            )}
            {task.dueDate && (
              <div>
                <p>Due Date: {task.dueDate}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;









