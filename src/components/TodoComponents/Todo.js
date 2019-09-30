import React, { Component } from 'react';

// * COMPONENT IMPORTS
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';

export default class Todo extends Component {
    constructor() {
        super()

        // ? STATE FOR TODO LIST (ITEMS)
        this.state = {
            todoList: []
        }
    }

    // * TRACK CHANGES FOR INPUT VALUE
    handleChange = (e) => {
        e.preventDefault();

        // ! MAKE SURE TO GRAB VALUE FROM ELEMENT
        console.log(e.target.value)
    }

    // * ADDING NEW TODO OBBJECTS FOR STATE
    addTodos = (e) => {
        e.preventDefault()

        console.log(`THIS IS ADDING A TODO ${this.state.todoList}`)
    }

    // * CLEAR COMPLETED TODOS
    clearCompletedTodos = (e) => {
        e.preventDefault()

        console.log(`THIS IS CLEARING COMPLETED TODOS ${this.state.todoList}`)
    }

    render() {

        return (
            <div>
                <h1>
                    SOMETINNNNG HERE~~~~~~~~~ {':('}
                </h1>

                <TodoList 
                todoList={this.state.todoList} />

                <TodoForm 
                handleChange={this.handleChange}
                addTodos={this.addTodos}
                clearCompletedTodos={this.clearCompletedTodos} />
            </div>
        )
    }
}