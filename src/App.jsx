import { useState } from "react";
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
    }
    function EditTodo(Todo){

    }
    function DeleteTodo(Todo){

    }

    return (
        <>
            <Header todos={todos} />
            <Tabs selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
                todos={todos}
            />
            <TodoList selectedTab={selectedTab} todos={todos} />
            <TodoInput AddNewTodo={AddNewTodo} />
        </>
    );
}
