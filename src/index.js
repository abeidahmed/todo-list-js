import './stylesheets/index.scss';
import Todo from './models/todo';
import renderProjectButton from './views/sidebar';
import renderTodoItem from './views/todo';

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
  if (localStorage.getItem('projects') === null) {
    storeProject();
  }
});

renderProjectButton();
const activeProjectNow = JSON.parse(localStorage.getItem('activeProject'));
document
  .querySelector(`button[data-project-title="${activeProjectNow}"]`)
  .click();

addTodoForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const todo = new Todo(
    todoFormTitle.value,
    todoFormDescription.value,
    todoFormDueDate.value,
    todoFormPriority.value,
  );

  todo.addTodo();
  renderTodoItem(activeProjectNow);
});
