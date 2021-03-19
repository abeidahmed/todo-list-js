
import createModal from './todoForm';
import { projects, initializeProject } from '../utils/testHelpers';

test('it renders the todo modal', () => {
initializeProject({ projects });
document.body.innerHTML = `
<div id="modal-root"></div>
`;
const todo = projects[0].todos[0];
const container = document.getElementById('modal-root');
container.append(createModal(todo));
const modalContainer = container.children[0];
expect(modalContainer.hasAttribute('hidden')).toBe(true);
}); 
