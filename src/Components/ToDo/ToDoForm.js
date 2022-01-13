import React, { Component } from "react";
import { Container } from "reactstrap";



export default class ToDoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        tasks: [],
        task: '',
        completed: false,
        };
    }
    
    handleChange = (event) => {
        this.setState({ task: event.target.value });
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ tasks: [...this.state.tasks, this.state.task] });
    }
    
    handleCheck = (event) => {
        event.preventDefault();
        this.setState({ completed: !this.state.completed });
    }
    
    render() {
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
            <input
                type="text"
                value={this.state.task}
                onChange={this.handleChange}
            />
            <input type="submit" value="Add Task" />
            </form>
            <ul>
            {this.state.tasks.map((task, index) => {
                return (
                <li key={index}>
                    {task}
                    <input type="checkbox" onChange={this.handleCheck} />
                </li>
                );
            })}
            </ul>
        </div>
        );
    }
    }

//     ! In this challenge your goal is to create a to do list: 
// ? 1.) ability to accept a task from a user
// ? 2.) ability to add this to the state
// ? 3.) ability to display all of the tasks
// ? 4.) ability to evaluated if a task was completed and update the state