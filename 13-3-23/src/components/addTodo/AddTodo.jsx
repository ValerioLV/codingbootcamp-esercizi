import "./index.css"

const AddTodoIcon = ({todoList, setVisible}) => {

    return(
        <div className="AddTodoIcon">
            <button onClick={() => setVisible((prev) => !prev)}>
                Aggiungi task
            </button>
        </div>
    )
}

export default AddTodoIcon