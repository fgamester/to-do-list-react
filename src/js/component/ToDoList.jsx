import React, { useRef, useState } from "react";

const ToDoListApp = () => {
    const [todoList, setTodoList] = useState([])
    const inputRef = useRef()

    const deletetask = (index) => {
        const newList = todoList.filter((_, i) => i !== index)
        setTodoList(newList)
        console.log(newList)
    }

    const addTask = (target) => {
        const newList = [...todoList]
        newList.push(target.value)
        setTodoList(newList)
        console.log(todoList)
        target.value = ""
    }

    const itemsHtml = todoList.map((item, index) => {
        console.log(todoList.length)
        if (todoList.length === 0) {
            return (
                <li className="list-group-item d-flex justify-content-between align-items-center onpointer">
                    There is no taks in the list, try to add one...
                </li >
            )
        } else {
            return (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center onpointer">
                    {item} <i className="fa-solid fa-x" onClick={() => deletetask(index)} ></i>
                </li >
            )
        }
    });

    return (
        <div className="">
            <h1 className="display-1">
                todos
            </h1>
            <div className="listDiv d-flex justify-content-center">
                <ul className="list-group col-11 col-sm-7 col-md-5 col-lg-4 col-xxl-3">
                    <li className="list-group-item">
                        <input ref={inputRef} onKeyUp={(e) => (e.target.value !== "" && e.key == "Enter") && addTask(e.target)}
                            className="todoInput" type="text" placeholder="What needs to be done?" />
                    </li>
                    {todoList.length > 0 && (itemsHtml)}
                </ul>
            </div>
        </div>
    );
}

export default ToDoListApp;