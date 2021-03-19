import Todo from './todo';

const projects = [
  {
    title: 'Coding',
    todos: [
      {
        id: 1,
        title: 'coding todo 1',
        description: 'javascript coding challenge',
        dueDate: '2021-03-04',
        priority: 'low',
        isCompleted: false,
      },
    ],
  },
];

const initializeTodo = ({ activeProject = 'Coding', projects }) => {
  localStorage.setItem('activeProject', JSON.stringify(activeProject));
  localStorage.setItem('projects', JSON.stringify(projects));
};

afterEach(() => {
  localStorage.removeItem('activeProject');
  localStorage.removeItem('projects');
});

test('adds todo to localStorage', () => {
  initializeTodo({ projects });
  const todo = new Todo(
    'Todo',
    'This should be completed',
    '2021-03-04',
    'low',
  );

  expect(todo.addTodo()).toBe(true);
});

test('does not add todo if todo is already present', () => {
  initializeTodo({ projects });
  const todo = new Todo(
    'coding todo 1',
    'This should be completed',
    '2021-03-04',
    'low',
  );

  expect(todo.addTodo()).toBe(false);
});

test('it deletes the todo from the localStorage', () => {
  initializeTodo({ projects });
  const todo = new Todo();
  todo.deleteTodo('coding todo 1');

  const localTodos = JSON.parse(localStorage.getItem('projects'))[0].todos;
  expect(localTodos.length).toBe(0);
});
