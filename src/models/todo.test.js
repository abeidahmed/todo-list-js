import Todo from './todo';
import { projects, initializeProject } from '../utils/testHelpers';

afterEach(() => {
  localStorage.removeItem('activeProject');
  localStorage.removeItem('projects');
});

test('adds todo to localStorage', () => {
  initializeProject({ projects });
  const todo = new Todo(
    'Todo',
    'This should be completed',
    '2021-03-04',
    'low',
  );

  expect(todo.addTodo()).toBe(true);
});

test('does not add todo if todo is already present', () => {
  initializeProject({ projects });
  const todo = new Todo(
    'coding todo 1',
    'This should be completed',
    '2021-03-04',
    'low',
  );

  expect(todo.addTodo()).toBe(false);
});

test('it deletes the todo from the localStorage', () => {
  initializeProject({ projects });
  const todo = new Todo();
  todo.deleteTodo('coding todo 1');

  const localTodos = JSON.parse(localStorage.getItem('projects'))[0].todos;
  expect(localTodos.length).toBe(0);
});

test('it should update the todo from the localStorage', () => {
  initializeProject({ projects });
  const todo = new Todo();
  todo.updateTodo({ id: 1, title: 'coding todo2' });
  const localTodos = JSON.parse(localStorage.getItem('projects'))[0].todos;
  expect(localTodos[0].title).toBe('coding todo2');
});

test('it should toggle is complete the todo from the localStorage', () => {
  initializeProject({ projects });
  const todo = new Todo();
  todo.toggleIsComplete(1);
  const localTodos = JSON.parse(localStorage.getItem('projects'))[0].todos;
  expect(localTodos[0].isCompleted).toBe(true);
});
