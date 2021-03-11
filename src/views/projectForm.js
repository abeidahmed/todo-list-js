import Project from '../models/project';
import renderProjectButton from './sidebar';

const createProject = (event) => {
  event.preventDefault();
  const inputValue = event.target.children[0].value;
  const project = new Project(inputValue);
  project.addProject();
  renderProjectButton();
  event.target.reset();
};

const projectForm = () => {
  const container = document.createElement('form');

  const projectButton = document.createElement('button');
  projectButton.setAttribute('type', 'submit');
  projectButton.classList.add('project-button');
  projectButton.textContent = 'Add a project';

  const formInput = document.createElement('input');
  formInput.setAttribute('type', 'text');
  formInput.setAttribute('required', true);
  formInput.classList.add('form-input');

  container.append(formInput);
  container.append(projectButton);

  container.addEventListener('submit', createProject);

  return container;
};

const renderProjectForm = () => {
  const sidebarForm = document.getElementById('sidebar-id');
  sidebarForm.append(projectForm());
};

export default renderProjectForm;
