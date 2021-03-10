const closeModal = (event) => {
  event.target.closest('.modal').setAttribute('hidden', '');
};

const todoForm = () => {
  const form = document.createElement('form');
  form.setAttribute('id', 'edit-todo-on-demand');

  const formTitleContainer = document.createElement('div');
  formTitleContainer.classList.add('form-body');

  const titleInput = document.createElement('input');
  titleInput.setAttribute('type', 'text');
  titleInput.setAttribute('placeholder', 'Add your todo title');
  formTitleContainer.append(titleInput);

  const formDescriptionContainer = document.createElement('div');
  formDescriptionContainer.classList.add('form-body');

  const descriptionInput = document.createElement('textarea');
  descriptionInput.setAttribute('rows', 4);
  descriptionInput.setAttribute('placeholder', 'Add your todo description');
  formDescriptionContainer.append(descriptionInput);

  const formAccessory = document.createElement('div');
  formAccessory.classList.add('form-accessory');

  const formLeft = document.createElement('div');
  formLeft.classList.add('form-flex');

  const dueDateContainer = document.createElement('div');
  dueDateContainer.classList.add('form-control');

  const dueDateLabel = document.createElement('label');
  dueDateLabel.setAttribute('for', 'edit-due-date');

  const dueDateInput = document.createElement('input');
  dueDateInput.setAttribute('type', 'date');
  dueDateInput.classList.add('accessory-control');

  dueDateContainer.append(dueDateLabel);
  dueDateContainer.append(dueDateInput);

  const priorityContainer = document.createElement('div');
  priorityContainer.classList.add('form-control');

  const priorityLabel = document.createElement('label');
  priorityLabel.setAttribute('for', 'edit-priority');

  const prioritySelect = document.createElement('select');
  prioritySelect.classList.add('accessory-control');

  const lowOption = document.createElement('option');
  lowOption.value = 'low';
  lowOption.textContent = 'Low';
  prioritySelect.append(lowOption);

  const mediumOption = document.createElement('option');
  mediumOption.value = 'medium';
  mediumOption.textContent = 'Medium';
  prioritySelect.append(mediumOption);

  const highOption = document.createElement('option');
  highOption.value = 'high';
  highOption.textContent = 'High';
  prioritySelect.append(highOption);

  priorityContainer.append(priorityLabel);
  priorityContainer.append(prioritySelect);

  formLeft.append(dueDateContainer);
  formLeft.append(priorityContainer);

  const formRight = document.createElement('div');
  formRight.classList.add('form-flex');

  const editButton = document.createElement('button');
  editButton.setAttribute('type', 'publish');
  editButton.classList.add('btn', 'btn-primary');
  editButton.textContent = 'Publish';

  const cancelButton = document.createElement('button');
  cancelButton.setAttribute('type', 'button');
  cancelButton.classList.add('btn', 'btn-secondary');
  cancelButton.textContent = 'Cancel';

  formRight.append(editButton);
  formRight.append(cancelButton);

  formAccessory.append(formLeft);
  formAccessory.append(formRight);

  form.append(formTitleContainer);
  form.append(formDescriptionContainer);
  form.append(formAccessory);

  cancelButton.addEventListener('click', closeModal);

  return form;
};

const createModal = () => {
  const modalContainer = document.createElement('div');
  modalContainer.classList.add('modal');
  modalContainer.setAttribute('hidden', '');

  const modalOverlay = document.createElement('div');
  modalOverlay.classList.add('modal-overlay');
  modalContainer.append(modalOverlay);

  const modalBody = document.createElement('div');
  modalBody.classList.add('modal-body');
  modalBody.append(todoForm());

  modalContainer.append(modalBody);
  modalOverlay.addEventListener('click', closeModal);

  return modalContainer;
};

export default createModal;