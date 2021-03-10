import Todo from '../models/todo';
import createModal from './todoForm';

const updateIsCompleted = (e) => {
  const projects = JSON.parse(localStorage.getItem('projects'));

  const dupProjects = [...projects];
  const { projectTitle } = e.target.dataset;
  const projectIndex = dupProjects.findIndex(
    (project) => project.title === projectTitle,
  );
  const { title } = e.target.dataset;
  const todoIndex = dupProjects[projectIndex].todos.findIndex(
    (todo) => todo.title === title,
  );
  dupProjects[projectIndex].todos[todoIndex].isCompleted = !dupProjects[
    projectIndex
  ].todos[todoIndex].isCompleted;

  localStorage.setItem('projects', JSON.stringify(dupProjects));
  // eslint-disable-next-line no-use-before-define
  renderTodoItem(projectTitle);
};

const deleteTodo = (event) => {
  const { title, projectTitle } = event.target.dataset;
  new Todo().deleteTodo(title);
  // eslint-disable-next-line no-use-before-define
  renderTodoItem(projectTitle);
};

const toggleTodoDetail = (event) => {
  const parentContainer = event.target.closest('#todo-container');
  const detailsContainer = parentContainer.querySelector('.todo-details');
  detailsContainer.toggleAttribute('hidden');
};

const createTodoDetail = (todo) => {
  const container = document.createElement('div');
  container.classList.add('todo-details');
  container.setAttribute('hidden', '');

  const title = document.createElement('div');
  title.textContent = `Title: ${todo.title}`;

  const description = document.createElement('div');
  description.textContent = `Description: ${todo.description}`;

  const dueDate = document.createElement('div');
  dueDate.textContent = `Due date: ${todo.dueDate}`;

  const priority = document.createElement('div');
  priority.textContent = `Priority: ${todo.priority}`;

  container.append(title);
  container.append(description);
  container.append(dueDate);
  container.append(priority);

  return container;
};

const createTodo = (todo, projectTitle) => {
  const todoWrapper = document.createElement('div');
  todoWrapper.setAttribute('id', 'todo-container');

  const todoItemContainer = document.createElement('div');
  todoItemContainer.classList.add('todo-item-container');

  const todoItem = document.createElement('div');
  todoItem.classList.add('todo-item');

  const todoTitleContainer = document.createElement('div');
  todoTitleContainer.classList.add('todo-title-container');

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('data-title', todo.title);
  checkbox.setAttribute('data-project-title', projectTitle);

  const titleButton = document.createElement('button');
  titleButton.setAttribute('type', 'button');
  titleButton.textContent = todo.title;

  if (todo.isCompleted) {
    checkbox.setAttribute('checked', 'checked');
    titleButton.classList.add('checked');
  }

  checkbox.addEventListener('change', updateIsCompleted);
  todoTitleContainer.append(checkbox);
  todoTitleContainer.append(titleButton);

  const todoActionBtns = document.createElement('div');
  todoActionBtns.classList.add('todo-action-btns');

  const editButton = document.createElement('button');
  editButton.setAttribute('type', 'button');
  editButton.textContent = 'Edit';
  todoActionBtns.append(editButton);

  const deleteButton = document.createElement('button');
  deleteButton.setAttribute('type', 'button');
  deleteButton.setAttribute('data-title', todo.title);
  deleteButton.setAttribute('data-project-title', projectTitle);
  deleteButton.textContent = 'Delete';
  todoActionBtns.append(deleteButton);
  deleteButton.addEventListener('click', deleteTodo);

  todoItem.append(todoTitleContainer);
  todoItem.append(todoActionBtns);

  todoItemContainer.append(todoItem);
  todoWrapper.append(todoItemContainer);
  todoWrapper.append(createTodoDetail(todo));
  todoWrapper.append(createModal(todo));

  titleButton.addEventListener('click', toggleTodoDetail);
  editButton.addEventListener('click', (event) => {
    const parentContainer = event.target.closest('#todo-container');
    const modalRoot = parentContainer.querySelector('.modal');
    modalRoot.removeAttribute('hidden');
  });

  return todoWrapper;
};

const renderTodoItem = (projectTitle) => {
  const container = document.getElementById('todo-items');
  const projects = JSON.parse(localStorage.getItem('projects'));
  const index = projects.findIndex((project) => project.title === projectTitle);
  const { todos } = projects[index];

  container.innerHTML = '';
  todos.forEach((todo) => container.append(createTodo(todo, projectTitle)));
};

export default renderTodoItem;
