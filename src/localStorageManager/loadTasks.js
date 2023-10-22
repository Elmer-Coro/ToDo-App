export default function loadTasks() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}
