import React from 'react';

export const TodoList = ({ todoList }) => (
    <div className={`todo__list`}>
        <h2>Tasks:</h2>

        {/* // * IF TODOLIST EXIST, RENDER LIST OF TODO ITEMS
        */}

        <ul>
            {todoList && todoList.map((item, key) => <li key={key}>{item.task}</li>)}
        </ul>
    </div>
)