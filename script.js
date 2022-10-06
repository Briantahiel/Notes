( () => {
const btn = document.querySelector("[data-form-btn]");
// const input = document.querySelector("[data-form-input]");

const addTask = (e) => {
  e.preventDefault();
  const input = document.querySelector("[data-form-input]");
  let value = input.value;
 
  if(value == "" || value.trim() == ""){
    alert("Add a new task")
    return
  }
  const list = document.querySelector("[data-list]");
  const task = document.createElement("li");
  task.classList.add("card");
  input.value = "";
  const taskContent = document.createElement("div");
  const taskAdded = document.createElement("span");
  taskAdded.classList.add("task");
  taskAdded.innerHTML = value;
  taskContent.appendChild(checkCompleted());
  taskContent.appendChild(taskAdded);

  task.appendChild(taskContent);
  task.appendChild(deleteIcon());
  list.appendChild(task);
};

btn.addEventListener("click", addTask);

const checkCompleted = () => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", completedTask);
    return i
};

const completedTask = (event) => {
    const element = event.target;
    element.classList.toggle("fas")
    element.classList.toggle("completeIcon")
    element.classList.toggle("far")
};
const deleteIcon = () => {
    const i = document.createElement("i")
    i.classList.add("fas", "fa-trash-alt","trashIcon", "icon")
    i.addEventListener("click", deleteTask)
    return i
};
const deleteTask = (event) => {
    const parent = event.target.parentElement;
    parent.remove();
}
}) ();