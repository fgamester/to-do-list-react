import React, { useState } from "react";

const ToDoListApp = () => {
    const [todoList, setTodoList] = useState([])

    const deletetask = (index) => {
        const newList = todoList.filter((_, i) => i !== index)
        setTodoList(newList)
    }

    const addTask = (target) => {
        const newList = [...todoList, target.value]
        setTodoList(newList)
        target.value = ""
    }

    const itemsHtml = todoList.length > 0 ? todoList.map((item, index) => (
        <li key={index} className="list-group-item d-flex justify-content-between align-items-center onpointer">
            {item} <i className="fa-regular fa-trash-can" onClick={() => deletetask(index)}></i>
        </li>
    )) : (
        <li className="list-group-item text-center">
            There is no task in the list, try to add one...
        </li>
    );

    return (
        <div className="">
            <h1 className="display-1">
                todos
            </h1>
            <div className="listDiv d-flex justify-content-center">
                <ul className="list-group col-11 col-sm-7 col-md-5 col-lg-4 col-xxl-3">
                    <li className="list-group-item">
                        <input onKeyUp={(e) => (e.target.value !== "" && e.key == "Enter") && addTask(e.target)}
                            className="todoInput" type="text" placeholder="What needs to be done?" />
                    </li>
                    {itemsHtml}
                </ul>
            </div>
        </div>
    );
}

export default ToDoListApp;