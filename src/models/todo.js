export default class Todo {
  constructor(title = '', description = '', dueDate = '', priority = '') {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  addTodo() {
    const dupProjects = [...this.projects];
    const projectIndex = dupProjects.findIndex(
      (project) => project.title === this.activeProject,
    );
    const { todos } = dupProjects[projectIndex];
    todos.push({
      title: this.title,
      description: this.description,
      dueDate: this.dueDate,
      priority: this.priority,
    });

    localStorage.setItem('projects', JSON.stringify(dupProjects));
  }

  get projects() {
    return JSON.parse(localStorage.getItem('projects'));
  }

  get activeProject() {
    return JSON.parse(localStorage.getItem('activeProject'));
  }
}
