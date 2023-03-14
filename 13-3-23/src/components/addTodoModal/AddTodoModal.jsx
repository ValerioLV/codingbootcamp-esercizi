import { useState } from "react"
import "./index.css"

const AddTodoModal = ({setTaskList, taskList}) => {
    const [newtask, setNewtask] = useState("")
    const [newcompleted, setNewcompleted] = useState(false)

    const arrayPush = () => {
        const newobj = {todo: newtask, completed: newcompleted}

        if(taskList.find((item) => item.todo === newtask) || newtask === "")
            {alert("task non valida")}

        else{
                setNewtask("");
                return setTaskList([...taskList, newobj]); 
            }  
    }

    return (
        <div className="AddTodoModal">
            <div className="Overlay"></div>
            <input type="text" onChange={(e) => {setNewtask(e.target.value)}} value={newtask} />
            <label htmlFor="completed">Completed?</label>
            <input type="checkbox" name="completed" onClick={() => setNewcompleted((prev) => !prev) } />
            <button type="submit" onClick={arrayPush}>Invia</button>
        </div>
    )
}

export default AddTodoModal