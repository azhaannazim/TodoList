import { useState } from "react";

export function TodoInput(props){
    const {AddNewTodo} = props;
    const [inputVal , setInputVal] = useState('');
    console.log(inputVal);
    return (
        <div className="input-container">
            <input value={inputVal} 
                onChange={(e) => { setInputVal(e.target.value) }}
                placeholder="Add task"
            />
            <button onClick={() => {
                if(!inputVal) {return}
                AddNewTodo(inputVal);
                setInputVal('');
            }}>
                <i className="fa-solid fa-plus"></i>
            </button>
            
        </div>
    )
}