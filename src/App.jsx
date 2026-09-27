import { useState } from 'react'
import TaskForm from './components/TaskForm.jsx'
import Task from './components/Task.jsx'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('all')

  function addTask(title) {
    const newTask = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    }

    setTasks((currentTasks) => [...currentTasks, newTask])
  }

  function toggleTask(taskId) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task,
      ),
    )
  }

  function deleteTask(taskId) {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId),
    )
  }

  const completedTasks = tasks.filter((task) => task.completed).length
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') {
      return !task.completed
    }

    if (filter === 'completed') {
      return task.completed
    }

    return true
  })

  return (
    <main>
      <h1>Task Manager</h1>
      <div className="task-summary" aria-live="polite">
        <span>Total sarcini: {tasks.length}</span>
        <span>Finalizate: {completedTasks}</span>
      </div>
      <TaskForm onAddTask={addTask} />
      <div className="filters" aria-label="Filtrează sarcinile">
        <button
          type="button"
          className={filter === 'all' ? 'active' : ''}
          onClick={() => setFilter('all')}
          aria-pressed={filter === 'all'}
        >
          Toate
        </button>
        <button
          type="button"
          className={filter === 'active' ? 'active' : ''}
          onClick={() => setFilter('active')}
          aria-pressed={filter === 'active'}
        >
          Active
        </button>
        <button
          type="button"
          className={filter === 'completed' ? 'active' : ''}
          onClick={() => setFilter('completed')}
          aria-pressed={filter === 'completed'}
        >
          Finalizate
        </button>
      </div>
      {tasks.length === 0 ? (
        <p className="empty-message">Nu există sarcini momentan.</p>
      ) : filteredTasks.length === 0 ? (
        <p className="empty-message">
          Nu există sarcini pentru filtrul selectat.
        </p>
      ) : (
        <ul className="task-list">
          {filteredTasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))}
        </ul>
      )}
    </main>
  )
}

export default App
