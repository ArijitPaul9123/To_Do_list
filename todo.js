// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue === '') {
        alert('Please enter a task!');
        return;
    }

    const taskList = document.getElementById('taskList');

    // Create new list item
    const li = document.createElement('li');

    // Create task text element
    const taskText = document.createElement('span');
    taskText.textContent = taskValue;

    // Create buttons
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit');
    editButton.onclick = () => editTask(li);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');
    deleteButton.onclick = () => deleteTask(li);

    const doneButton = document.createElement('button');
    doneButton.textContent = 'Done';
    doneButton.classList.add('done');
    doneButton.onclick = () => markTaskAsDone(li);

    // Append elements to list item
    li.appendChild(taskText);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    li.appendChild(doneButton);

    // Append list item to the list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
}

// Function to edit a task
function editTask(taskItem) {
    const taskText = taskItem.querySelector('span');
    const newTask = prompt('Edit your task:', taskText.textContent);

    if (newTask !== null && newTask.trim() !== '') {
        taskText.textContent = newTask.trim();
    }
}

// Function to delete a task
function deleteTask(taskItem) {
    if (confirm('Are you sure you want to delete this task?')) {
        taskItem.remove();
    }
}

// Function to mark a task as done
function markTaskAsDone(taskItem) {
    taskItem.classList.toggle('done');
}
