import Project from './project';

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

test('it adds the project to the localStorage', () => {
  initializeProject({ projects });
  const project = new Project('New project');
  project.addProject();
  const updatedProjects = JSON.parse(localStorage.getItem('projects'));

  expect(updatedProjects.length).toBe(2);
});

test('it initializes the todos to the added project', () => {
  initializeProject({ projects });
  const project = new Project('New project');
  project.addProject();
  const addedProject = JSON.parse(localStorage.getItem('projects'))[1];

  expect(addedProject.todos.length).toBe(0);
});
