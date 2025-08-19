const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    const taskText = inputBox.value.trim();

    if (taskText === '') {
        alert("You must write something");
        return;
    }

    // Create list item
    const li = document.createElement("li");

    // Left container (checkmark + text)
    const leftDiv = document.createElement("div");
    leftDiv.className = "task-left";

    // Checkmark
    const checkmark = document.createElement("span");
    checkmark.className = "checkmark";
    checkmark.innerHTML = "✔️";

    // Task text
    const taskSpan = document.createElement("span");
    taskSpan.className = "task-text";
    taskSpan.textContent = taskText;

    // Toggle completion on click
    taskSpan.onclick = () => {
        li.classList.toggle("checked");
    };

    leftDiv.appendChild(checkmark);
    leftDiv.appendChild(taskSpan);

    // Delete button
    const deleteBtn = document.createElement("span");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerHTML = "🗑️";
    deleteBtn.onclick = () => li.remove();

    // Append to li
    li.appendChild(leftDiv);
    li.appendChild(deleteBtn);

    // Add li to container
    listContainer.appendChild(li);

    // Clear input
    inputBox.value = '';
}

// Add task with Enter key
inputBox.addEventListener("keypress", function (e) {
    if (e.key === "Enter") addTask();
});
