import React from 'react';

export const TodoList = ({ todoList }) => (
    <div className={`todo__list`}>
        <h2>Tasks:</h2>

        {/* // * IF TODOLIST EXIST, RENDER LIST OF TODO ITEMS
        */}

        <ul>
            {todoList && todoList.map((item, key) => {

                {/* // * DISPLAY SPECIFIC VALUE BASED ON BOOLEAN VALUE
                    // * ALSO UPDATE THE CLEARED ITEMS A CLICK BUTTON
                 */}
                const isFalse = item.completed === false

                return <li key={key}>
                    {isFalse && item.task}
                    {isFalse && <button onClick={() => item.toggleComplete()}>x</button>}
                </li>
            })}
        </ul>
    </div>
)