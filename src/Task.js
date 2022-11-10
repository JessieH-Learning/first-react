export const Task = (props) => {
    return <li>{props.taskName} <button onClick={() => props.deleteTask(props.id)}>X</button></li>
}