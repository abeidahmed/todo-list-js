import './stylesheets/index.scss';
import Todo from './models/todo';

const projectNavbar = document.getElementById('project-navbar');

const projects = [
  {
    title: 'Coding',
    todos: [
      {
        title: 'coding todo 1',
        description: 'javascript coding challenge',
        dueDate: '30/03/2021',
        priority: 'low',
        isCompleted: false,
      },
      {
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
  localStorage.setItem('projects', JSON.stringify(projects));
};

window.addEventListener('DOMContentLoaded', storeProject);

console.log(JSON.parse(localStorage.getItem('projects')));

class Project {
  // eslint-disable-next-line class-methods-use-this
  listProject(projectName) {
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.setAttribute('data-project-title', projectName);
    button.textContent = projectName;

    button.addEventListener('click', (e) => {
      const { projectTitle } = e.target.dataset;
      const projectIndex = projects.findIndex(
        ({ title }) => title === projectTitle,
      );
      const { todos } = JSON.parse(localStorage.getItem('projects'))[
        projectIndex
      ];
      const todoInstance = new Todo(todos);
      todoInstance.listTodos();
    });

    projectNavbar.append(button);
  }
}

const project = new Project();

projects.forEach(({ title }) => {
  project.listProject(title);
});
