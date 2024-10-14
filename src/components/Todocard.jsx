export function TodoCard(props){
    const {todo , DeleteTodo , CompleteTodo ,todoIndex} = props

    return (
        <div className="card todo-item">
            <p>{todo.input}</p>
            <div className="todo-buttons">
                <button onClick={() => {
                    CompleteTodo(todoIndex)
                }} 
                disabled={todo.complete}>
                    <h6>Done</h6>
                </button>
                <button onClick={() => {
                    DeleteTodo(todoIndex);
                }}>
                    <h6>Delete</h6>
                </button>
            </div>

        </div>
    )
}