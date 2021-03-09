const todoItemParent = document.getElementById('todo-items');

export default class Todo {
  constructor(todos) {
    this.todos = todos;
  }

  // eslint-disable-next-line class-methods-use-this
  listTodos() {
    todoItemParent.innerHTML = '';

    this.todos.forEach((todo) => {
      todoItemParent.innerHTML += `
        <div class="todo-item-container">
          <div class="todo-item">
            <div class="todo-title-container">
              <input type="checkbox" />
              <button type="button">${todo.title}</button>
            </div>
            <div class="todo-action-btns">
              <button type="button">Edit</button>
              <button type="button">Delete</button>
            </div>
          </div>
          <div class="todo-details" hidden>
            <div>Title: ${todo.title}</div>
            <div>Due date: ${todo.dueDate}</div>
            <div>Description: ${todo.description}</div>
            <div>Priority: ${todo.priority}</div>
          </div>
        </div>
      `;
      // check on checkbox, we need to update the localstorage's isCompleted
      // render this HTML (loop) again so that it is updated

      // const todoWrapper = document.createElement('div');
      // todoWrapper.classList.add('todo-item-container');

      // const todoItemContainer = document.createElement('div');
      // todoItemContainer.classList.add('todo-item-container');

      // const todoItem = document.createElement('div');
      // todoItem.classList.add('todo-item');

      // const todoTitleContainer = document.createElement('div');
      // todoTitleContainer.classList.add('todo-title-container');

      // const checkbox = document.createElement('input');
      // checkbox.setAttribute('type', 'checkbox');
      // todoTitleContainer.append(checkbox);

      // const titleButton = document.createElement('button');
      // titleButton.setAttribute('type', 'button');
      // titleButton.textContent = todo.title;
      // todoTitleContainer.append(titleButton);

      // const todoActionBtns = document.createElement('div');
      // todoActionBtns.classList.add('todo-action-btns');

      // const editButton = document.createElement('button');
      // editButton.setAttribute('type', 'button');
      // editButton.textContent = 'Edit';
      // todoActionBtns.append(editButton);

      // const deleteButton = document.createElement('button');
      // deleteButton.setAttribute('type', 'button');
      // deleteButton.textContent = 'Delete';
      // todoActionBtns.append(deleteButton);

      // todoItem.append(todoTitleContainer);
      // todoItem.append(todoActionBtns);

      // todoItemContainer.append(todoItem);
      // todoItemParent.append(todoItemContainer);

      // const tableRow = document.createElement('tr');
      // const todoTitle = document.createElement('td');
      // const titleContainer = document.createElement('div');
      // titleContainer.classList.add('todo-checker');
      // const todoCheckbox = document.createElement('input');
      // todoCheckbox.setAttribute('type', 'checkbox');
      // titleContainer.append(todoCheckbox);
      // const todoSpan = document.createElement('span');
      // todoSpan.textContent = todo.title;
      // titleContainer.append(todoSpan);
      // todoTitle.classList.add('table-td');
      // todoTitle.append(titleContainer);

      // todoCheckbox.addEventListener('change', (e) => {
      //   const parentTr = e.target.closest('tr');
      //   const parentTds = parentTr.querySelectorAll('td');

      //   if (e.target.checked) {
      //     parentTds.forEach((td) => {
      //       td.classList.add('checked');
      //     });
      //   } else {
      //     parentTds.forEach((td) => {
      //       td.classList.remove('checked');
      //     });
      //   }
      // });

      // const todoDueDate = document.createElement('td');
      // todoDueDate.classList.add('table-td', 'right');
      // todoDueDate.textContent = todo.dueDate;

      // const todoAction = document.createElement('td');
      // const editButton = document.createElement('button');
      // editButton.setAttribute('type', 'button');
      // editButton.textContent = 'Edit';
      // todoAction.append(editButton);

      // const deleteButton = document.createElement('button');
      // deleteButton.setAttribute('type', 'button');
      // deleteButton.textContent = 'Delete';
      // todoAction.append(deleteButton);

      // todoAction.classList.add('table-td', 'right');

      // tableRow.append(todoTitle);
      // tableRow.append(todoDueDate);
      // tableRow.append(todoAction);
      // tableBody.append(tableRow);
    });
  }
}
