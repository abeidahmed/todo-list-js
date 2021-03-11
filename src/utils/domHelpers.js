import Todo from '../models/todo';
import renderTodoItem from '../views/todo';

const addTodoFormOpenBtn = document.getElementById('add-todo-form-open');
const addTodoFormCloseBtn = document.getElementById('add-todo-form-close');
const addTodoForm = document.getElementById('add-todo-form');
const todoFormTitle = document.getElementById('add-todo-title');
const todoFormDescription = document.getElementById('add-todo-description');
const todoFormDueDate = document.getElementById('add-todo-date');
const todoFormPriority = document.getElementById('add-todo-priority');

addTodoForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const todo = new Todo(
    todoFormTitle.value,
    todoFormDescription.value,
    todoFormDueDate.value,
    todoFormPriority.value,
  );

  todo.addTodo();
  const activeProject = JSON.parse(localStorage.getItem('activeProject'));
  renderTodoItem(activeProject);
  event.target.reset();
  event.target.setAttribute('hidden', '');
  addTodoFormOpenBtn.removeAttribute('hidden');
});

addTodoFormOpenBtn.addEventListener('click', (event) => {
  addTodoForm.removeAttribute('hidden');
  event.target.setAttribute('hidden', '');
});

addTodoFormCloseBtn.addEventListener('click', () => {
  addTodoForm.setAttribute('hidden', '');
  addTodoFormOpenBtn.removeAttribute('hidden');
});
