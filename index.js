

class Todo {
    constructor(title, completed = false) {
      this.title = title;
      this.completed = completed;
    }

    toggleCompleted() {
      this.completed = !this.completed;
    }
  }

  class TodoApp {
    constructor() {
      this.todos = [];
    }

    addTodo() {
      const inputField = document.getElementById('todoInput');
      const title = inputField.value.trim();

      if (title !== '') {
        const todo = new Todo(title);
        this.todos.push(todo);
        inputField.value = '';
        this.displayTodos();
      }
    }

    deleteTodo(index) {
      this.todos.splice(index, 1);
      this.displayTodos();
    }

    toggleTodoCompleted(index) {
      const todo = this.todos[index];
      if (todo) {
        todo.toggleCompleted();
        this.displayTodos();
      }
    }

    displayTodos() {
      const todoList = document.getElementById('todoList');
      todoList.innerHTML = '';

      this.todos.forEach((todo, index) => {
        const todoItem = document.createElement('div');
        todoItem.className = 'todo-item';
        if (todo.completed) {
          todoItem.classList.add('completed');
        }

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.addEventListener('change', () => {
          this.toggleTodoCompleted(index);
        });

        const title = document.createElement('span');
        title.textContent = todo.title;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
          this.deleteTodo(index);
        });

        todoItem.appendChild(checkbox);
        todoItem.appendChild(title);
        todoItem.appendChild(deleteButton);
        todoList.appendChild(todoItem);
      });
    }
  }

  const todoApp = new TodoApp();

  const addButton = document.getElementById('addButton');
  addButton.addEventListener('click', () => {
    todoApp.addTodo();
  });

  document.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      todoApp.addTodo();
    }
  });
