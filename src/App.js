import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'


const initialTaskList = [
  {
      id: 1,
      text: 'Eat apple',
      day: 'Nov 4th at 10:30am',
      reminder: false,
  },
  {
      id: 2,
      text: 'Drink juice',
      day: 'Nov 4th at 8:00am',
      reminder: false,
  },
  {
      id: 3,
      text: 'Eat veggies for lunch',
      day: 'Nov 4th at 1:30pm',
      reminder: false,
  }
]

function App() {
  const [showAddTask, setShowAddTask] = useState(true)

  const [tasks, setTasks] = useState(initialTaskList);

  //Add Task
  const addTask = (task) => {
    console.log(task)
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

//Delete Task
  const deleteTask = (id) => {
    console.log("Hello", id)
    const currentTasks = tasks.filter((task) => task.id !== id);
    setTasks(currentTasks);
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    console.log(id)
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }


  return (
    <div className="container">
      <Header 
      onAdd={() => setShowAddTask(!showAddTask)}
      showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : 
      ('No taks to show'
      )}
      
    </div>
  );
}

export default App;
