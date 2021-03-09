const createButton = (buttonText) => {
  const button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.setAttribute('data-project-title', buttonText);
  button.textContent = buttonText;

  return button;
};

const renderProjectButton = () => {
  const container = document.getElementById('project-navbar');
  const projects = JSON.parse(localStorage.getItem('projects'));
  projects.forEach((project) => {
    container.append(createButton(project.title));
  });
};

export default renderProjectButton;
