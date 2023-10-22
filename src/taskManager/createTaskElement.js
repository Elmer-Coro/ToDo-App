export default function createTaskElement(taskText) {
  const newTaskItem = document.createElement("li");
  newTaskItem.textContent = taskText;

  const filledBotton = document.createElement("button");
  filledBotton.textContent = "✔️";
  filledBotton.addEventListener("click", () => {
    newTaskItem.remove();
    saveTasks();
  });
  newTaskItem.appendChild(filledBotton);

  const editButton = document.createElement("button");
  editButton.textContent = "✏️";
  editButton.addEventListener("click", () => {
    const newText = prompt("Edita la tarea: ", taskText);
    if (newText !== null && newText.trim() !== "") {
      taskText = newText;
      newTaskItem.textContent = taskText;
      newTaskItem.appendChild(filledBotton);
      newTaskItem.appendChild(editButton);
      saveTasks();
    }
  });
  newTaskItem.appendChild(editButton);

  return newTaskItem;
}
