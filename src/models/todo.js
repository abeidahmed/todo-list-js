const tableBody = document.getElementById('table-body');

export default class Todo {
  constructor(todos = []) {
    this.todos = todos;
  }

  // eslint-disable-next-line class-methods-use-this
  listTodos() {
    tableBody.innerHTML = '';

    this.todos.forEach((todo) => {
      const tableRow = document.createElement('tr');
      const todoTitle = document.createElement('td');
      todoTitle.textContent = todo.title;
      todoTitle.classList.add('table-td');

      const todoDueDate = document.createElement('td');
      todoDueDate.classList.add('table-td', 'right');
      todoDueDate.textContent = todo.dueDate;

      const todoAction = document.createElement('td');
      todoAction.classList.add('table-td', 'right');

      tableRow.append(todoTitle);
      tableRow.append(todoDueDate);
      tableRow.append(todoAction);
      tableBody.append(tableRow);
    });
  }
}
