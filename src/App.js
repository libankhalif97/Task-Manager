import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import "./App.css"

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const completeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    setSearchQuery('');
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') {
      return task.completed;
    } else if (filter === 'pending') {
      return !task.completed;
    } else {
      return true;
    }
  }).filter((task) => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    return (
      task.title.toLowerCase().includes(lowerCaseQuery) ||
      task.description.toLowerCase().includes(lowerCaseQuery)
      // Add additional attributes for search if needed
    );
  });

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <div className="task-manager">
        <div className="task-manager-header">
          <TaskForm addTask={addTask} />
          <div className="filter">
            <label htmlFor="filter-select">Filter: </label>
            <select id="filter-select" value={filter} onChange={handleFilterChange}>
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
            </select>
          </div>
        </div>
        <div className="task-list">
          <TaskList
            tasks={filteredTasks}
            completeTask={completeTask}
            deleteTask={deleteTask}
            handleSearch={handleSearch}
            filter={filter}
            handleFilterChange={handleFilterChange}
            searchQuery={searchQuery}
          />
        </div>
      </div>
    </div>
  );  
};

export default App;


