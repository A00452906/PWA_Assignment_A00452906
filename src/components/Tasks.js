import Task from "./Task"

const Tasks = ({ tasks, onDelete }) => {
    return (
        <>
            {tasks.length > 0 ? tasks.map(task => {
                return <Task key={task.id} task={task} />
            }) : 'Nothing to show'}
        </>
    )
}

export default Tasks
