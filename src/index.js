import createTaskElement from "./taskManager/createTaskElement.js";
import loadTasks from "./localStorageManager/loadTasks.js";
import saveTasks from "./localStorageManager/saveTasks.js";
import { emojis } from "./settings.js";

//Seleccionar los elementos html a usar
const taskForm = document.getElementById("taskForm");
const newTask = document.getElementById("newTask");
const taskList = document.getElementById("taskList");
const emojiContainer = document.getElementById("emojiContainer");

//Cargar tareas desde el localStorage si existen
document.addEventListener("DOMContentLoaded", () => {
  const saveTasks = loadTasks();
  saveTasks.forEach((taskText) => {
    const newTaskItem = createTaskElement(taskText);
    taskList.appendChild(newTaskItem);
  });

  database.ref("tasks").on("child_added", (snapshot) => {
    const task = snapshot.val();
    const newTaskItem = createTaskElement(task);
    taskList.appendChild(newTaskItem);
  });
});

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskText = newTask.value.trim();
  if (taskText !== "") {
    const newTaskItem = createTaskElement(taskText);
    taskList.appendChild(newTaskItem);
    newTask.value = "";
    saveTasks(getAllTasks());
  }
});

function getAllTasks() {
  return Array.from(document.querySelectorAll("#taskList li")).map(
    (task) => task.textContent
  );
}

emojis.forEach((emoji) => {
  const emojiButton = document.createElement("button");
  emojiButton.innerHTML = emoji;
  emojiButton.addEventListener("click", () => {
    newTask.value += emoji;
  });
  emojiContainer.appendChild(emojiButton);
});
