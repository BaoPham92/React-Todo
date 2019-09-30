import React from 'react';

export const TodoForm = ({ handleChange, addTodos, clearCompletedTodos }) => (
    <form
    // onSubmit={''}
    >
        <input
            type="text"
            name="Task"
            placeholder="Add Task"
            onChange={(e) => handleChange(e)}
        />

        <button onClick={(e) => addTodos(e)}>Add Todo</button>
        <button onClick={(e) => clearCompletedTodos(e)}>Clear Completed</button>
    </form>
)