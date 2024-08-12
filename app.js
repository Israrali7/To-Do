
const tasks = [];


function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskName = taskInput.value.trim();

    if (taskName) {
        const task = {
            id: Date.now(),
            name: taskName
        };
        tasks.push(task);
        taskInput.value = '';
        renderTasks();
    } else {
        alert('Please enter a task.');
    }
}

// Function to render tasks
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task.name;
       taskList.appendChild(li)


    });
}

// Initial rendering of tasks
renderTasks();
