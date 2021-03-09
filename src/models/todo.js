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
      const titleContainer = document.createElement('div');
      titleContainer.classList.add('todo-checker');
      const todoCheckbox = document.createElement('input');
      todoCheckbox.setAttribute('type', 'checkbox');
      titleContainer.append(todoCheckbox);
      const todoSpan = document.createElement('span');
      todoSpan.textContent = todo.title;
      titleContainer.append(todoSpan);
      todoTitle.classList.add('table-td');
      todoTitle.append(titleContainer);

      const todoDueDate = document.createElement('td');
      todoDueDate.classList.add('table-td', 'right');
      todoDueDate.textContent = todo.dueDate;

      const todoAction = document.createElement('td');
      const editButton = document.createElement('button');
      editButton.setAttribute('type', 'button');
      editButton.textContent = 'Edit';
      todoAction.append(editButton);

      const deleteButton = document.createElement('button');
      deleteButton.setAttribute('type', 'button');
      deleteButton.textContent = 'Delete';
      todoAction.append(deleteButton);

      todoAction.classList.add('table-td', 'right');

      tableRow.append(todoTitle);
      tableRow.append(todoDueDate);
      tableRow.append(todoAction);
      tableBody.append(tableRow);
    });
  }
}
