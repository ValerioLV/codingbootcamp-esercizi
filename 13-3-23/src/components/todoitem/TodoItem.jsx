import "./index.css"

const TodoItem = ({taskData, setTaskList}) => {

    return (
        <div className="TodoItem" onClick={() => 
        setTaskList((prev) => prev.filter((item) => item !== taskData))}>
            <p>{taskData.todo}: {taskData.completed ? "fatto" : "non fatto"}</p>
        </div>
    )
}


export default TodoItem