import renderProjectForm from './projectForm';

test('it should render a project form', () => {
  document.body.innerHTML = `
    <div id="sidebar-id" class="sidebar-container">
      <h2 class="sidebar-heading">Projects</h2>
      <nav id="project-navbar" class="sidebar-navigation"></nav>
    </div>
  `;
  renderProjectForm();
  const sidebar = document.getElementById('sidebar-id').children;

  expect(sidebar[2].nodeName === 'FORM').toBe(true);
});
