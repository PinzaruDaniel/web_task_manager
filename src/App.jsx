import { useState } from 'react'
import TaskForm from './components/TaskForm.jsx'
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
    </main>
  )
}

export default App
