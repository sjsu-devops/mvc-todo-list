import { Todo } from '../models/Todo';

export class TodoController {
  private todos: Todo[] = [];
  private nextId: number = 1;

  addTask(task: string): void {
    const todo = new Todo(this.nextId++, task);
    this.todos.push(todo);
    this.render();
  }

  toggleTask(id: number): void {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      this.render();
    }
  }

  render(): void {
    const todoList = document.getElementById('todo-list');
    if (todoList) {
      todoList.innerHTML = this.todos.map(todo => `
        <li>
          <input type="checkbox" ${todo.completed ? 'checked' : ''} onclick="todoController.toggleTask(${todo.id})">
          ${todo.task}
        </li>
      `).join('');
    }
  }
}
