import { TodoController } from './controllers/TodoController';

const todoController = new TodoController();

(window as any).todoController = todoController;

document.getElementById('new-task')?.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});

function addTask() {
  const input = document.getElementById('new-task') as HTMLInputElement;
  if (input.value.trim()) {
    todoController.addTask(input.value.trim());
    input.value = '';
  }
}
