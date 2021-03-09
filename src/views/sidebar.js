import renderTodoItem from './todo';

const projects = JSON.parse(localStorage.getItem('projects'));
const pageTitle = document.getElementById('project-main-title');

const createButton = (buttonText) => {
  const button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.setAttribute('data-project-title', buttonText);
  button.textContent = buttonText;

  button.addEventListener('click', () => {
    localStorage.setItem('activeProject', JSON.stringify(buttonText));
    renderTodoItem(buttonText);
    pageTitle.textContent = buttonText;
  });

  return button;
};

const renderProjectButton = () => {
  const container = document.getElementById('project-navbar');
  projects.forEach((project) => {
    container.append(createButton(project.title));
  });
};

export default renderProjectButton;
