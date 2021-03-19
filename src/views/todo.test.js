import renderTodoItem from './todo';
import { projects, initializeProject } from '../utils/testHelpers';

afterEach(() => {
  localStorage.removeItem('activeProject');
  localStorage.removeItem('projects');
});

test('it renders the todo for the specific project', () => {
  initializeProject({ projects });
  document.body.innerHTML = `
    <div id="todo-items" class="todo-items"></div>
  `;
  renderTodoItem('Coding');
  const todoContainer = document.getElementById('todo-items');

  expect(todoContainer.children.length).toBe(1);
});

test('it completes the todo and adds a class of checked', () => {
  initializeProject({ projects });
  document.body.innerHTML = `
    <div id="todo-items" class="todo-items"></div>
  `;
  renderTodoItem('Checked project');
  const todoContainer = document.getElementById('todo-items');
  const button = todoContainer.querySelector('button');

  expect(button.classList.contains('checked')).toBe(true);
});
