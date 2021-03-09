import './stylesheets/index.scss';
import Todo from './models/todo';
import renderProjectButton from './views/sidebar';
import renderTodoItem from './views/todo';

const addTodoFormOpenBtn = document.getElementById('add-todo-form-open');
const addTodoFormCloseBtn = document.getElementById('add-todo-form-close');
const addTodoForm = document.getElementById('add-todo-form');
const todoFormTitle = document.getElementById('add-todo-title');
const todoFormDescription = document.getElementById('add-todo-description');
const todoFormDueDate = document.getElementById('add-todo-date');
const todoFormPriority = document.getElementById('add-todo-priority');

const projects = [
  {
    title: 'Coding',
    todos: [
      {
        title: 'coding todo 1',
        description: 'javascript coding challenge',
        dueDate: '30/03/2021',
        priority: 'low',
        isCompleted: false,
      },
      {
        title: 'coding todo 2',
        description: 'javascript coding challenge',
        dueDate: '30/03/2021',
        priority: 'high',
        isCompleted: true,
      },
    ],
  },
  {
    title: 'Workout',
    todos: [
      {
        title: 'Workout todo',
        description: 'javascript coding challenge',
        dueDate: '30/03/2021',
        priority: 'medium',
        isCompleted: true,
      },
    ],
  },
  {
    title: 'Climbing',
    todos: [
      {
        title: 'Climbing todo',
        description: 'javascript coding challenge',
        dueDate: '30/03/2021',
        priority: 'low',
        isCompleted: false,
      },
    ],
  },
];

const storeProject = () => {
  localStorage.setItem('activeProject', JSON.stringify(projects[0].title));
  localStorage.setItem('projects', JSON.stringify(projects));
};

window.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.getItem('projects')) {
    storeProject();
  }

  renderProjectButton();

  const activeProjectNow = JSON.parse(localStorage.getItem('activeProject'));
  document
    .querySelector(`button[data-project-title="${activeProjectNow}"]`)
    .click();
});

// Create a new todo
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
});

// Toggle todo form
addTodoFormOpenBtn.addEventListener('click', (event) => {
  addTodoForm.removeAttribute('hidden');
  event.target.setAttribute('hidden', '');
});

addTodoFormCloseBtn.addEventListener('click', () => {
  addTodoForm.setAttribute('hidden', '');
  addTodoFormOpenBtn.removeAttribute('hidden');
});
