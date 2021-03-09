import './stylesheets/index.scss';

const projectNavbar = document.getElementById('project-navbar');

const projects = [
  {
    title: 'Coding',
  },
  {
    title: 'Workout',
  },
  {
    title: 'Climbing',
  },
];

class Project {
  // eslint-disable-next-line class-methods-use-this
  listProject(projectName) {
    const wrapper = document.createElement('button');
    wrapper.setAttribute('type', 'button');
    wrapper.textContent = projectName;
    projectNavbar.append(wrapper);
  }
}

const project = new Project();

projects.forEach(({ title }) => {
  project.listProject(title);
});
