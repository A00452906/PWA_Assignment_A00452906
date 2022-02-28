const Task = ({ task, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder': ''}`} onDoubleClick={() => onToggle(task.id)}>
            <p>Task Name: {task.taskName}</p>
            <p>Due Date: {task.dueDate.toDateString()}</p>
            <p>Assigned: {task.assignedTo}</p>
        </div>
    )
}

export default Task
