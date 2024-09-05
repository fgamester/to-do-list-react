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
        <li key={index} className="list-group-item d-flex justify-content-between align-items-center bg-light customOpacity-2 onpointer">
            {item} <i className="fa-regular fa-trash-can" onClick={() => deletetask(index)}></i>
        </li>
    )) : (
        <li className="list-group-item text-center bg-light customOpacity-2">
            There is no task in the list, try to add one...
        </li>
    );

    return (
        <div>
            <div className="d-flex justify-content-center mt-5 opacity-75">
                <h1 className="text-muted display-1 bg-light col-11 col-sm-8 col-md-6 col-lg-5 col-xxl-4 rounded-4">
                    <i class="fa-solid fa-list display-3" />t<i class="fa-regular fa-circle-check display-5" />d<i class="fa-regular fa-circle-check display-5" />
                </h1>
            </div>
            <div className="listDiv d-flex justify-content-center">
                <ul className="list-group col-11 col-sm-8 col-md-6 col-lg-5 col-xxl-4">
                    <li className="list-group-item customOpacity-1">
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