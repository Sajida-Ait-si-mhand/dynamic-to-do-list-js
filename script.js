document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // false = don't resave when loading
    }

    function saveTasks() {
        const tasks = [];
        taskList.querySelectorAll('li').forEach(li => {
            const text = li.firstChild.textContent;
            tasks.push(text);
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function addTask(taskText, save = true) {
        if (!taskText) {
            taskText = taskInput.value.trim();
        }

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        const li = document.createElement('li');
        li.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn'); 

        removeButton.onclick = function() {
            taskList.removeChild(li);
            saveTasks(); 
        };

        li.appendChild(removeButton);
        taskList.appendChild(li);

        if (save) {
            saveTasks(); 
        }

        taskInput.value = "";
    }

    addButton.addEventListener('click', function() {
        addTask();
    });

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
    loadTasks();
});
