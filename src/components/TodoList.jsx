import { TodoCard } from "./Todocard";

export function TodoList(props){
    const {todos , selectedTab} = props;
    
    const filterTodoList = selectedTab == 'All' ?
    todos : 
    selectedTab == 'Completed' ? 
    todos.filter(val => val.complete): 
    todos.filter(val => !val.complete)

    return (
        <div>
            {
                filterTodoList.map((todo , todoIndex) => {
                    return (
                        <TodoCard 
                            key={todoIndex} 
                            todo={todo}
                        />
                    )
                })
            }
        </div>
    )
}