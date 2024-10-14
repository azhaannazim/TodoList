import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

export function App() {
  // const todos = [
  //   {input : 'get the groceries' ,complete : true},
  //   {input : 'study',complete : false},
  //   {input : 'play',complete : false},
  //   {input : 'food',complete : true},
  // ]
    const [todos, setTodos] = useState([
        { input: 'get the groceries', complete: true }
    ]);
    const [selectedTab , setSelectedTab] = useState('Pending');

    function AddNewTodo(newTodo) {
        const updatedTodos = [...todos, { input: newTodo, complete: false }];
        setTodos(updatedTodos);
        SaveData(updatedTodos);
    }
    function CompleteTodo(TabIndex){
        let newTodos = [...todos];
        let newTodo = newTodos[TabIndex];
        newTodo.complete = true;
        newTodo[TabIndex] = newTodo;

        setTodos(newTodos);
        SaveData(newTodos);
    }
    function DeleteTodo(TabIndex){
        let updatedTodos = todos.filter((val , Index) => {
            return Index !== TabIndex;
        })
        setTodos(updatedTodos);
        SaveData(updatedTodos);
    }
    function SaveData(currTodos){
        localStorage.setItem('todos', JSON.stringify({todos : currTodos}));
    }

    useEffect(() => {
        if(!localStorage || !localStorage.getItem('todo-list')){ return }
        let db = JSON.parse(localStorage.getItem('todo-list'));
        setTodos(db.todos);
    } , [])

    return (
        <>
            <Header todos={todos} />
            <Tabs selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
                todos={todos}
            />
            <TodoList CompleteTodo={CompleteTodo} 
                DeleteTodo={DeleteTodo} 
                selectedTab={selectedTab} 
                todos={todos} 
            />
            <TodoInput AddNewTodo={AddNewTodo} />
        </>
    );
}
