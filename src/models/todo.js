import { v4 as uuidv4 } from 'uuid';

export default class Todo {
  constructor(title = '', description = '', dueDate = '', priority = '') {
    this.id = uuidv4();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isCompleted = false;
  }

  addTodo() {
    const { todos, dupProjects } = this.todos;
    if (
      todos.some(
        ({ title }) => title.toLowerCase() === this.title.toLowerCase(),
      )
    ) {
      return false;
    }

    todos.push({
      id: this.id,
      title: this.title,
      description: this.description,
      dueDate: this.dueDate,
      priority: this.priority,
      isCompleted: this.isCompleted,
    });

    localStorage.setItem('projects', JSON.stringify(dupProjects));
    return true;
  }

  updateTodo({
    id,
    title = '',
    description = '',
    priority = '',
    dueDate = '',
  }) {
    const { todos, projectIndex, dupProjects } = this.todos;
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const todo = todos[todoIndex];
    const newTodo = {
      title: title.length ? title : todo.title,
      description: description.length ? description : todo.description,
      dueDate: dueDate.length ? dueDate : todo.dueDate,
      priority: priority.length ? priority : todo.priority,
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

  toggleIsComplete(id) {
    const { todos, projectIndex, dupProjects } = this.todos;
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    dupProjects[projectIndex].todos[todoIndex].isCompleted = !dupProjects[
      projectIndex
    ].todos[todoIndex].isCompleted;

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
