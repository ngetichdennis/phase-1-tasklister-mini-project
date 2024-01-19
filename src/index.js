document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // Get the form element by its id
const form = document.getElementById('create-task-form');

// Get the input element by its id
const input = document.getElementById('new-task-description');

// Get the tasks list element by its id
const tasks = document.getElementById('tasks');

// Add an event listener to the form submission
form.addEventListener('submit', function(event) {
  // Prevent the default form behavior
  event.preventDefault();

  // Get the value of the input
  const task = input.value;

  // Clear the input value
  input.value = '';

  // Create a list item element
  const li = document.createElement('li');

  // Set the text content of the list item to the task
  li.textContent = task;

  // Append the list item to the tasks list
  tasks.appendChild(li);
});
});
