export function Header(props){
    const {todos} = props;
    const len = todos.length;
    const taskOrTasks = (len != 1) ? 'tasks' : 'task';
    return (
        <header>
            <h1 className="text-gradient">you have {len} open {taskOrTasks}.</h1>
        </header>
    )
}