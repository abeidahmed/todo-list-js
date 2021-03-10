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
        dueDate: '2021-03-04',
        priority: 'low',
        isCompleted: false,
      },
      {
        id: uuidv4(),
        title: 'Ruby project',
        description: 'Create tic tac toe game',
        dueDate: '2021-03-04',
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
        title: 'jogging',
        description: 'I need to go jogging at the end of the day',
        dueDate: '2021-03-04',
        priority: 'medium',
        isCompleted: true,
      },
      {
        id: uuidv4(),
        title: 'basketball',
        description: 'I will watch basket tonight',
        dueDate: '2021-03-10',
        priority: 'high',
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
        description: 'climbing is a good sport',
        dueDate: '2021-03-04',
        priority: 'low',
        isCompleted: false,
      },
      {
        id: uuidv4(),
        title: 'hiking todo',
        description: 'hiking is a good adventure',
        dueDate: '2021-03-12',
        priority: 'medium',
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
