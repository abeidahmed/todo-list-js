import './stylesheets/index.scss';

const projectNavbar = document.getElementById('projetttctctct-navbar');
const tableBody = document.getElementById('table-body');

const projects = [
  {
    title: 'Coding',
    todos: [
      {
        title: 'coding',
        description: 'javascript coding challenge',
        dueDate: '30/03/2021',
        priority: 2,
      },
    ],
  },
  {
    title: 'Workout',
    todos: [
      {
        title: 'coding',
        description: 'javascript coding challenge',
        dueDate: '30/03/2021',
        priority: 2,
      },
    ],
  },
  {
    title: 'Climbing',
    todos: [
      {
        title: 'coding',
        description: 'javascript coding challenge',
        dueDate: '30/03/2021',
        priority: 2,
      },
    ],
  },
];

class Project {
  // eslint-disable-next-line class-methods-use-this
  listProject(projectName) {
    const wrapper = document.createElement('button');
    wrapper.setAttribute('type', 'button');
    wrapper.textContent = projectName;
    projectNavbar.append(wrapper);
  }
}

const project = new Project();

projects.forEach(({ title }) => {
  project.listProject(title);
});

class Todo {
  listTodos() {
    const tableRow = document.createElement('tr');
    const tableData1 = document.createElement('td');
    tableData1.classList.add('table-td');
    const tableData2 = document.createElement('td');
    tableData2.classList.add('table-td', 'right');
    const tableData3 = document.createElement('td');
    tableData3.classList.add('table-td', 'right');
    tableRow.append(tableData1);
    tableRow.append(tableData2);
    tableRow.append(tableData3);
    tableBody.append(tableRow);
  }
}

const todo = new Todo();
