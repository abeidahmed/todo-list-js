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
