import renderProjectButton from './sidebar';
import { projects, initializeProject } from '../utils/testHelpers';

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

  expect(buttons.length).toBe(2);
});
