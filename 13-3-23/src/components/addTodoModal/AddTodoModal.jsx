import { useState } from "react"
import "./index.css"

const AddTodoModal = ({setTaskList, taskList}) => {
    const [newtask, setNewtask] = useState({})
    const [newcompleted, setNewcompleted] = useState(false)

    const arrayPush = () => {
        const newobj = {todo: newtask, completed: newcompleted}
      setTaskList(
            [...taskList, newobj]
      );
    }

    return (
        <div className="AddTodoModal">
            <div className="Overlay"></div>
            <input type="text" onChange={(e) => {setNewtask(e.target.value)}} />
            <label htmlFor="completed">Completed?</label>
            <input type="checkbox" name="completed" onClick={(prev) => setNewcompleted(!prev)} />
            <button type="submit" onClick={arrayPush}>Invia</button>
        </div>
    )
}

export default AddTodoModal