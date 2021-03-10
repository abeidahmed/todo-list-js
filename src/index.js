import './stylesheets/index.scss';
import { v4 as uuidv4 } from 'uuid';
import renderProjectButton from './views/sidebar';
import renderProjectForm from './views/projectForm';
import './utils/domHelpers';

const projects = [
  {
    title: 'Coding',
    todos: [
      {
        id: uuidv4(),
        title: 'coding todo 1',
        description: 'javascript coding challenge',
        dueDate: '30/03/2021',
        priority: 'low',
        isCompleted: false,
      },
      {
        id: uuidv4(),
        title: 'coding todo 2',
        description: 'javascript coding challenge',
        dueDate: '30/03/2021',
        priority: 'high',
        isCompleted: true,
      },
    ],
  },
  {
    title: 'Workout',
    todos: [
      {
        id: uuidv4(),
        title: 'Workout todo',
        description: 'javascript coding challenge',
        dueDate: '30/03/2021',
        priority: 'medium',
        isCompleted: true,
      },
    ],
  },
  {
    title: 'Climbing',
    todos: [
      {
        id: uuidv4(),
        title: 'Climbing todo',
        description: 'javascript coding challenge',
        dueDate: '30/03/2021',
        priority: 'low',
        isCompleted: false,
      },
    ],
  },
];

const storeProject = () => {
  localStorage.setItem('activeProject', JSON.stringify(projects[0].title));
  localStorage.setItem('projects', JSON.stringify(projects));
};

window.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.getItem('projects')) {
    storeProject();
  }

  renderProjectButton();
  renderProjectForm();

  const activeProjectNow = JSON.parse(localStorage.getItem('activeProject'));
  document
    .querySelector(`button[data-project-title="${activeProjectNow}"]`)
    .click();
});
