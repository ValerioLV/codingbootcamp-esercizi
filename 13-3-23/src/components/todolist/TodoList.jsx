import { todo } from "../../mock/toDo"
import TodoItem from "../todoitem"
import AddTodoIcon from "../addTodo"
import AddTodoModal from "../addTodoModal"

import { useEffect, useState } from "react"
import "./index.css"

const TodoList = () => {
    const [visible, setVisible] = useState(false)
    const [taskList, setTaskList] = useState([])

    useEffect(() => {setTaskList(todo)}, []);


    return(
        <div className="TodoList">
            {taskList.map((task, index) => (
                <TodoItem taskData={task} key={index} />
            ))}
            <AddTodoIcon setVisible={setVisible} todoList={todo}/>
            {visible ? (<AddTodoModal taskList={taskList} setTaskList={setTaskList} />) : null }
        </div>
        
    )
}

export default TodoList