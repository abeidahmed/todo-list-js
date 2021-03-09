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
        priority: 2,
      },
      {
        title: 'coding todo 2',
        description: 'javascript coding challenge',
        dueDate: '30/03/2021',
        priority: 2,
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
        priority: 2,
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
        priority: 2,
      },
    ],
  },
];

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
      const { todos } = projects[projectIndex];
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
