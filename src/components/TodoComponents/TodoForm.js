import React from 'react';

export const TodoForm = ({ handleChange, addTodos, clearCompletedTodos }) => {

    return (
        <form
        // onSubmit={''}
        >
            <input
                type="text"
                name="task"
                placeholder="Add Task"
                onChange={(e) => handleChange(e)}
            />

            <button onClick={(e) => addTodos(handleChange(e), e)}>Add Todo</button>
            <button onClick={(e) => clearCompletedTodos(e)}>Clear Completed</button>
        </form>
    )
}