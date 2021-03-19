import renderProjectButton from './sidebar';

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

const initializeProject = ({ activeProject = 'Coding', projects }) => {
  localStorage.setItem('activeProject', JSON.stringify(activeProject));
  localStorage.setItem('projects', JSON.stringify(projects));
};

afterEach(() => {
  localStorage.removeItem('activeProject');
  localStorage.removeItem('projects');
});

test('it lists all the projects in the sidebar', () => {
  document.body.innerHTML = `
    <nav id="project-navbar" class="sidebar-navigation"></nav>
  `;
  initializeProject({ projects });
  renderProjectButton();
  const container = document.getElementById('project-navbar');
  const buttons = container.querySelectorAll('button');

  expect(buttons.length).toBe(1);
});
