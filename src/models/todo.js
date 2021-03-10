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

  updateTodo() {
    const { todos, projectIndex, dupProjects } = this.todos;
    const todoIndex = todos.findIndex((todo) => todo.title === this.title);
    const todo = todos[todoIndex];
    const newTodo = {
      title: this.title.length ? this.title : todo.title,
      description: this.description.length
        ? this.description
        : todo.desscription,
      dueDate: this.dueDate.length ? this.dueDate : todo.dueDate,
      priority: this.priority.length ? this.priority : todo.priority,
      isCompleted: this.isCompleted.length
        ? this.isCompleted
        : todo.isCompleted,
    };

    const dupTodos = [...todos];
    dupTodos.splice(todoIndex, 1, newTodo);
    dupProjects[projectIndex].todos = dupTodos;

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
