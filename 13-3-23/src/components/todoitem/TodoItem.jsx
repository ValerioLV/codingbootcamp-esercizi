import "./index.css"

const TodoItem = ({taskData}) => {

    return (
        <div className="TodoItem">
            <p>{taskData.todo}: {taskData.completed ? "fatto" : "non fatto"}</p>
        </div>
    )
}


export default TodoItem