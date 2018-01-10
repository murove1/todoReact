import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import Form from './components/Form';

class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: []
    };
  }

  componentDidMount = () => {
    let localTodos = JSON.parse(localStorage.getItem('todos'));

    if (localTodos) {
      this.setState({ todos: localTodos });
    }
  };

  componentDidUpdate = () => {
    this.updateLocalStorage();
  };

  handleStatusChange = id => {
    let todos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    this.setState({ todos });
  };

  handleAdd = title => {
    let todo = {
      id: Date.now(),
      title,
      completed: false
    };

    let todos = [todo, ...this.state.todos];

    this.setState({ todos });
  };

  handleDelete = id => {
    let todos = this.state.todos.filter(todo => todo.id !== id);

    this.setState({ todos });
  };

  handleEdit = (id, title) => {
    let todos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.title = title;
      }
      return todo;
    });

    this.setState({ todos });
  };

  updateLocalStorage = () => {
    let todos = JSON.stringify(this.state.todos);
    localStorage.setItem('todos', todos);
  };

  render() {
    const { todos } = this.state;

    return (
      <main className="main">
        <Header todos={todos} />
        <TodoList
          todos={todos}
          onStatusChange={this.handleStatusChange}
          onDelete={this.handleDelete}
          onEdit={this.handleEdit}
        />
        <Form onAdd={this.handleAdd} />
      </main>
    );
  }
}

export default App;
