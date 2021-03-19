import renderTodoItem from './todo';

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
  {
    title: 'Checked project',
    todos: [
      {
        id: 2,
        title: 'coding todo 1',
        description: 'javascript coding challenge',
        dueDate: '2021-03-04',
        priority: 'low',
        isCompleted: true,
      },
    ],
  },
];

const initializeProject = ({ activeProject = 'Coding', projects }) => {
  localStorage.setItem('activeProject', JSON.stringify(activeProject));
  localStorage.setItem('projects', JSON.stringify(projects));
};

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
