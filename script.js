const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const pendingList = document.getElementById("pendingList");
const completedList = document.getElementById("completedList");

// Add new task
addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return alert("Please enter a task!");

  const li = document.createElement("li");
  li.innerHTML = `
    ${taskText}
    <div>
      <button class="complete">✅</button>
      <button class="edit">✏️</button>
      <button class="delete">❌</button>
    </div>
  `;

  pendingList.appendChild(li);
  taskInput.value = "";

  // Button actions
  li.querySelector(".complete").addEventListener("click", () => {
    li.querySelector(".complete").remove();
    completedList.appendChild(li);
  });

  li.querySelector(".delete").addEventListener("click", () => li.remove());

  li.querySelector(".edit").addEventListener("click", () => {
    const newTask = prompt("Edit your task:", taskText);
    if (newTask) li.firstChild.textContent = newTask;
  });
});