function Task({ task }) {
  return (
    <li className="task-item">
      <label>
        <input type="checkbox" checked={task.completed} readOnly />
        <span>{task.title}</span>
      </label>
    </li>
  )
}

export default Task
