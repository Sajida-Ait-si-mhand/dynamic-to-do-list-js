// Run code after the HTML document has fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function responsible for creating and adding a task to the list
    function addTask() {
        // Get trimmed text from input
        const taskText = taskInput.value.trim();

        // If empty, alert and stop
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create list item and set text
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button, set text and class
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn'); // ✅ using classList.add

        // Remove the li from the list when the remove button is clicked
        removeButton.onclick = function() {
            if (taskList.contains(li)) {
                taskList.removeChild(li);
            }
        };

        // Append remove button to li, then append li to the task list
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }

    // Attach event listeners: button click and Enter key on input
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Optional: run addTask on load if input is pre-filled
    if (taskInput.value.trim() !== '') {
        addTask();
    }
});
