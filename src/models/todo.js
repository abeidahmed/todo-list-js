export default class Todo {
  constructor(title = '', description = '', dueDate = '', priority = '') {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isCompleted = false;
  }

  addTodo() {
    const { todos, dupProjects } = this.todos;
    todos.push({
      title: this.title,
      description: this.description,
      dueDate: this.dueDate,
      priority: this.priority,
      isCompleted: this.isCompleted,
    });

    localStorage.setItem('projects', JSON.stringify(dupProjects));
  }

  deleteTodo(title) {
    const { todos, projectIndex, dupProjects } = this.todos;
    const dupTodos = todos.filter((todo) => todo.title !== title);
    dupProjects[projectIndex].todos = dupTodos;

    localStorage.setItem('projects', JSON.stringify(dupProjects));
  }

  get todos() {
    const dupProjects = [...this.projects];
    const projectIndex = dupProjects.findIndex(
      (project) => project.title === this.activeProject,
    );
    const { todos } = dupProjects[projectIndex];

    return { todos, projectIndex, dupProjects };
  }

  // eslint-disable-next-line class-methods-use-this
  get projects() {
    return JSON.parse(localStorage.getItem('projects'));
  }

  // eslint-disable-next-line class-methods-use-this
  get activeProject() {
    return JSON.parse(localStorage.getItem('activeProject'));
  }
}
