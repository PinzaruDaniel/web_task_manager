import { useState } from 'react'
import TaskForm from './components/TaskForm.jsx'
import Task from './components/Task.jsx'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])

  function addTask(title) {
    const newTask = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    }

    setTasks((currentTasks) => [...currentTasks, newTask])
  }

  return (
    <main>
      <h1>Task Manager</h1>
      <p className="task-count">Total sarcini: {tasks.length}</p>
      <TaskForm onAddTask={addTask} />
      {tasks.length === 0 ? (
        <p className="empty-message">Nu există sarcini momentan.</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </ul>
      )}
    </main>
  )
}

export default App
