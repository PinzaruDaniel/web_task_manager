import { useState } from 'react'

function TaskForm({ onAddTask }) {
  const [taskName, setTaskName] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const trimmedTaskName = taskName.trim()

    if (!trimmedTaskName) {
      return
    }

    onAddTask(trimmedTaskName)
    setTaskName('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="task-name">
        Denumirea sarcinii
      </label>
      <input
        id="task-name"
        type="text"
        value={taskName}
        onChange={(event) => setTaskName(event.target.value)}
        placeholder="Introdu denumirea sarcinii"
        autoComplete="off"
      />
      <button type="submit" disabled={!taskName.trim()}>
        Adaugă
      </button>
    </form>
  )
}

export default TaskForm
