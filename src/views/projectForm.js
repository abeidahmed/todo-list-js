
const sidebarForm = document.getElementById('sidebar-id');

const projectForm = () => {
  const container = document.createElement('div');
  const projectButton = document.createElement('button');
  projectButton.setAttribute('type', 'button');
  projectButton.classList.add('project-button');
  projectButton.textContent = 'Add a project';
  const formInput = document.createElement('input');
  formInput.setAttribute('type', 'text');
  formInput.classList.add('form-input');
  container.append(formInput);
  container.append(projectButton);
  return container;
}

const renderProjectForm = () => {
  sidebarForm.append(projectForm());

};

export default renderProjectForm;
