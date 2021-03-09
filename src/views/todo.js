const createTodoDetail = (todo) => {
  const container = document.createElement('div');
  container.classList.add('todo-details');

  const title = document.createElement('div');
  title.textContent = `Title: ${todo.title}`;

  const description = document.createElement('div');
  description.textContent = `Description: ${todo.description}`;

  const dueDate = document.createElement('div');
  dueDate.textContent = `Due date: ${todo.dueDate}`;

  const priority = document.createElement('div');
  priority.textContent = `Priority: ${todo.priority}`;

  container.append(title);
  container.append(description);
  container.append(dueDate);
  container.append(priority);

  return container;
};

const createTodo = (todo) => {
  const todoWrapper = document.createElement('div');
  todoWrapper.classList.add('todo-item-container');

  const todoItemContainer = document.createElement('div');
  todoItemContainer.classList.add('todo-item-container');

  const todoItem = document.createElement('div');
  todoItem.classList.add('todo-item');

  const todoTitleContainer = document.createElement('div');
  todoTitleContainer.classList.add('todo-title-container');

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('data-title', todo.title);
  todoTitleContainer.append(checkbox);

  const titleButton = document.createElement('button');
  titleButton.setAttribute('type', 'button');
  titleButton.textContent = todo.title;
  todoTitleContainer.append(titleButton);

  const todoActionBtns = document.createElement('div');
  todoActionBtns.classList.add('todo-action-btns');

  const editButton = document.createElement('button');
  editButton.setAttribute('type', 'button');
  editButton.textContent = 'Edit';
  todoActionBtns.append(editButton);

  const deleteButton = document.createElement('button');
  deleteButton.setAttribute('type', 'button');
  deleteButton.textContent = 'Delete';
  todoActionBtns.append(deleteButton);

  todoItem.append(todoTitleContainer);
  todoItem.append(todoActionBtns);

  todoItemContainer.append(todoItem);
  todoWrapper.append(todoItemContainer);
  todoWrapper.append(createTodoDetail(todo));

  return todoWrapper;
};

const renderTodoItem = (todo) => {
  const container = document.getElementById('todo-items');
  const projects = JSON.parse(localStorage.getItem('projects'));
  const index = projects.findIndex((project) => project.title === todo);
  const { todos } = projects[index];

  container.innerHTML = '';
  todos.forEach((todo) => container.append(createTodo(todo)));
};

export default renderTodoItem;
