import Project from './project';
import { projects, initializeProject } from '../utils/testHelpers';

afterEach(() => {
  localStorage.removeItem('activeProject');
  localStorage.removeItem('projects');
});

test('it adds the project to the localStorage', () => {
  initializeProject({ projects });
  const project = new Project('New project');
  project.addProject();
  const updatedProjects = JSON.parse(localStorage.getItem('projects'));

  expect(updatedProjects.length).toBe(3);
});

test('it initializes the todos to the added project', () => {
  initializeProject({ projects });
  const project = new Project('New project');
  project.addProject();
  const addedProject = JSON.parse(localStorage.getItem('projects'))[1];

  expect(addedProject.todos.length).toBe(1);
});
