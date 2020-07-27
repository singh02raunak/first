// // Define UI Vars
// const form = document.querySelector('#task-form');
// const taskList = document.querySelector('.collection');
// const clearBtn = document.querySelector('.clear-tasks');
// const filter = document.querySelector('#filter');
// const taskInput = document.querySelector('#task');

// // Load all event listeners
// loadEventListeners();

// // Load all event listeners
// function loadEventListeners() {
//   // DOM Load event
//   document.addEventListener('DOMContentLoaded', getTasks);
//   // Add task event
//   form.addEventListener('submit', addTask);
//   // Remove task event
//   taskList.addEventListener('click', removeTask);
//   // Clear task event
//   clearBtn.addEventListener('click', clearTasks);
//   // Filter tasks event
//   filter.addEventListener('keyup', filterTasks);
// }

// // Get Tasks from LS
// function getTasks() {
//   let tasks;
//   if(localStorage.getItem('tasks') === null){
//     tasks = [];
//   } else {
//     tasks = JSON.parse(localStorage.getItem('tasks'));
//   }

//   tasks.forEach(function(task){
//     // Create li element
//     const li = document.createElement('li');
//     // Add class
//     li.className = 'collection-item';
//     // Create text node and append to li
//     li.appendChild(document.createTextNode(task));
//     // Create new link element
//     const link = document.createElement('a');
//     // Add class
//     link.className = 'delete-item secondary-content';
//     // Add icon html
//     link.innerHTML = '<i class="fa fa-remove"></i>';
//     // Append the link to li
//     li.appendChild(link);

//     // Append li to ul
//     taskList.appendChild(li);
//   });
// }

// // Add Task
// function addTask(e) {
//   if(taskInput.value === '') {
//     alert('Add a task');
//   }

//   // Create li element
//   const li = document.createElement('li');
//   // Add class
//   li.className = 'collection-item';
//   // Create text node and append to li
//   li.appendChild(document.createTextNode(taskInput.value));
//   // Create new link element
//   const link = document.createElement('a');
//   // Add class
//   link.className = 'delete-item secondary-content';
//   // Add icon html
//   link.innerHTML = '<i class="fa fa-remove"></i>';
//   // Append the link to li
//   li.appendChild(link);

//   // Append li to ul
//   taskList.appendChild(li);

//   // Store in LS
//   storeTaskInLocalStorage(taskInput.value);

//   // Clear input
//   taskInput.value = '';

//   e.preventDefault();
// }

// // Store Task
// function storeTaskInLocalStorage(task) {
//   let tasks;
//   if(localStorage.getItem('tasks') === null){
//     tasks = [];
//   } else {
//     tasks = JSON.parse(localStorage.getItem('tasks'));
//   }

//   tasks.push(task);

//   localStorage.setItem('tasks', JSON.stringify(tasks));
// }

// // Remove Task
// function removeTask(e) {
//   if(e.target.parentElement.classList.contains('delete-item')) {
//     if(confirm('Are You Sure?')) {
//       e.target.parentElement.parentElement.remove();

//       // Remove from LS
//       removeTaskFromLocalStorage(e.target.parentElement.parentElement);
//     }
//   }
// }

// // Remove from LS
// function removeTaskFromLocalStorage(taskItem) {
//   let tasks;
//   if(localStorage.getItem('tasks') === null){
//     tasks = [];
//   } else {
//     tasks = JSON.parse(localStorage.getItem('tasks'));
//   }

//   tasks.forEach(function(task, index){
//     if(taskItem.textContent === task){
//       tasks.splice(index, 1);
//     }
//   });

//   localStorage.setItem('tasks', JSON.stringify(tasks));
// }

// // Clear Tasks
// function clearTasks() {
//   // taskList.innerHTML = '';

//   // Faster
//   while(taskList.firstChild) {
//     taskList.removeChild(taskList.firstChild);
//   }

//   // https://jsperf.com/innerhtml-vs-removechild

//   // Clear from LS
//   clearTasksFromLocalStorage();
// }

// // Clear Tasks from LS
// function clearTasksFromLocalStorage() {
//   localStorage.clear();
// }

// // Filter Tasks
// function filterTasks(e) {
//   const text = e.target.value.toLowerCase();

// document.querySelectorAll('.collection-item').forEach(function(task){
// const item = task.firstChild.textContent;

//     if(item.toLowerCase().indexOf(text) != -1){
//       task.style.display = 'block';
//     } else {
//       task.style.display = 'none';
//     }
//   });
// }

const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// add data to ui
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // const data=form.task.value
  const data = e.target.task.value;

  taskList.innerHTML += `<li class='collection-item'>${data}<a class='delete-item secondary-content'>
<i class="fa fa-remove"></i>
</a></li>`;

  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(data);
  localStorage.setItem("tasks", JSON.stringify(tasks));
});

document.addEventListener("DOMContentLoaded", (e) => {
  console.log("hello");
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  console.log(tasks);
  tasks.forEach((task) => {
    taskList.innerHTML += `<li class='collection-item'>${task}<a class='delete-item secondary-content'>
<i class="fa fa-remove"></i>
</a></li>`;
  });
});

// remove task
taskList.addEventListener("click", (e) => {
  if (e.target.tagName === "I") {
    console.log(e.target.parentElement.parentElement);
    e.target.parentElement.parentElement.remove();
  }
});
//       // Remove from LS

// clear task
clearBtn.addEventListener("click", (e) => {
  var res = Array.from(taskList.children);
  res.forEach((li) => {
    li.style.display = "none";
  });
  localStorage.clear();
});

// filter
filter.addEventListener("keyup", (e) => {
  const value = e.target.value;
  console.log(taskList);
  console.log(taskList.firstChild);
  var res = Array.from(taskList.children);
  const res1 = document.querySelectorAll("li");
  res.forEach((li) => {
    console.log(li);
    console.log(li.firstChild);
    if (li.textContent.toLowerCase().includes("value")) {
      li.style.display = "block";
    } else {
      li.style.display = "none";
    }
  });
});
