// Focus — basic state management & interactivity

document.addEventListener('DOMContentLoaded', () => {

  // ----- Mobile nav toggle -----
  const navToggle = document.getElementById('navToggle');
  const primaryNav = document.getElementById('primaryNav');

  navToggle.addEventListener('click', () => {
    const isOpen = primaryNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close mobile menu after a nav link is tapped
  primaryNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      primaryNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // ----- Task board state -----
  const taskForm = document.getElementById('taskForm');
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
  const taskEmpty = document.getElementById('taskEmpty');

  function updateEmptyState() {
    const hasTasks = taskList.querySelectorAll('.task').length > 0;
    taskEmpty.hidden = hasTasks;
  }

  function addTask(text) {
    const li = document.createElement('li');
    li.className = 'task';

    const label = document.createElement('label');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const span = document.createElement('span');
    span.textContent = text;

    label.append(checkbox, span);
    li.append(label);
    taskList.append(li);
    updateEmptyState();
  }

  taskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const value = taskInput.value.trim();
    if (!value) return;
    addTask(value);
    taskInput.value = '';
    taskInput.focus();
  });

  updateEmptyState();
});
