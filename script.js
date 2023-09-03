let tasks = [];
const taskList = document.getElementById('list');
const addTaskInput = document.getElementById('input');
const addButton = document.getElementsByClassName('add');
const taskCounter = document.getElementById('total_task');

// ALL task /tasksArray show list

function addTaskToDOM(task) {
  const li = document.createElement('li');
  li.innerHTML = `
  <div id="check-box">
    <input type="checkbox" id="${task.id}" ${
    task.done ? 'checked' : ''
  } class="custom-checkbox">
    <label for="${task.id}">${task.text}</label>
    </div>
    <i class="fa-solid fa-trash delete"  onclick="deleteTask(${
      task.id
    })"data-id="${task.id}"></i>`;
  taskList.append(li);
}
function renderList() {
  console.log('renderlist called', tasks);
  taskList.innerHTML = null;
  for (let i = 0; i < tasks.length; i++) {
    addTaskToDOM(tasks[i]);
  }
  taskCounter.innerHTML = tasks.length;
}

// add array function
function addTask(task) {
  if (task) {
    tasks.push(task);
    renderList();
    return;
  }
}

// add task function

function newaddInputTasks() {
  var inputValue = addTaskInput.value;
  if (inputValue == '') {
    alert('You Must Be Write Something...!');
    return;
  }
  const task = {
    text: inputValue,
    id: parseInt(Date.now().toString()),
    done: false,
  };
  addTask(task);
  addTaskInput.value = null;
}

//  delete function

function deleteTask(taskId) {
  console.log('delete task called', taskId);
  const newTasks = tasks.filter(function (task) {
    return task.id !== taskId;
  });

  tasks = newTasks;
  renderList();
  alert('Tasks Deleted Successfully');
}

// all delete function
function allTaskDelete() {
  if (tasks.length == 0) {
    alert(' Sorry...! First Add Todo List Something ');
    return;
  }
  const samsul = [];
  tasks = samsul;

  var listElements = document.querySelectorAll('#samsul li');

  for (var i = 0; (li = listElements[i]); i++) {
    li.parentNode.removeChild(li);
  }
  renderList();
  alert('Successfully All Delete ..!');
}

// alll tick mark

function allMark() {
  console.log('all mark');
  if (tasks.length == 0) {
    alert(' Sorry No Task...! Add Somthing Task ?');
  }
  for (let i = 0; i < tasks.length; i++) {
    tasks[i].done = true;
  }
  renderList();
}
