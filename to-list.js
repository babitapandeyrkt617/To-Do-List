function addTask() {
    const taskInput = document.getElementById("task-input");
    const task = taskInput.value.trim();
    
    if (!task) return;

    const taskList = document.getElementById("task-list");
    const taskItem = document.createElement("li");

    taskItem.innerHTML = `<span>${task}</span><button onclick="removeTask(this)">Remove</button>`;

    taskList.appendChild(taskItem);
    taskInput.value = "";
}

function removeTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}
