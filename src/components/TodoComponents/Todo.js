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

        // ? NEW VALUE FROM INPUT
        const targetValue = { [e.target.name]: e.target.value.toLowerCase().trim() };

        // ! MAKE SURE TO GRAB VALUE FROM ELEMENT
        console.log('TARGET VALUE', targetValue);

        // * SET NEW STATE
        this.setState(targetValue);
    }

    // * ADDING NEW TODO OBBJECTS FOR STATE
    addTodos = (newValue, e) => {
        e.preventDefault()

        // * SET NEW STATE WITH NEW VALUE
        this.setState({
            todoList: [
                ...this.state.todoList,
                {
                    task: this.state.task,
                    completed: false,
                    id: Date.now()
                }
            ]
        })

        // ! CONFIRM DATA 
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
                <h1>Todo App!</h1>

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