const projects = [
  {
    title: 'Coding',
    todos: [
      {
        id: 1,
        title: 'coding todo 1',
        description: 'javascript coding challenge',
        dueDate: '2021-03-04',
        priority: 'low',
        isCompleted: false,
      },
    ],
  },
  {
    title: 'Checked project',
    todos: [
      {
        id: 2,
        title: 'coding todo 1',
        description: 'javascript coding challenge',
        dueDate: '2021-03-04',
        priority: 'low',
        isCompleted: true,
      },
    ],
  },
];

const initializeProject = ({ activeProject = 'Coding', projects }) => {
  localStorage.setItem('activeProject', JSON.stringify(activeProject));
  localStorage.setItem('projects', JSON.stringify(projects));
};

export { projects, initializeProject };
