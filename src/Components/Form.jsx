import React, { useState, useEffect } from 'react';
import Task from './Task';

export default function Form() {
  // Initialize state from local storage
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [Title, setTitle] = useState('');
  const [Description, setDescription] = useState('');

  // Update local storage whenever the tasks state changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const SubmitHandler = (e) => {
    e.preventDefault();
    setTasks([...tasks, { Title, Description }]);
    setTitle('');
    setDescription('');
  };

  const deleteTask = (indexToDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };

  return (
    <>
      <form onSubmit={SubmitHandler}>
        <div className="inputdiv">
          <input
            type="text"
            placeholder="Enter Task here"
            value={Title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Description here"
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button type="submit">ADD</button>
        </div>
      </form>
      {tasks.map((item, index) => (
        <Task
          key={index}
          Title={item.Title}
          Description={item.Description}
          onDelete={() => deleteTask(index)}
        />
      ))}
    </>
  );
}
