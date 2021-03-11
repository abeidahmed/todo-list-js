export default class Project {
  constructor(title = '') {
    this.title = title;
    this.todos = [];
  }

  addProject() {
    const dupProjects = [...this.projects];
    dupProjects.push({
      title: this.title,
      todos: this.todos,
    });

    localStorage.setItem('projects', JSON.stringify(dupProjects));
  }

  // eslint-disable-next-line class-methods-use-this
  get projects() {
    return JSON.parse(localStorage.getItem('projects'));
  }
}
