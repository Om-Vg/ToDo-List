//Selectors
const newTask = document.querySelector(".task");
const Submit = document.querySelector(".submit-button");
const oldList = document.querySelector(".Lists");
const filterOption = document.querySelector(".filter-todo");



//EventListners
Submit.addEventListener('click', addTodo);
oldList.addEventListener('click', deleteChecked);
filterOption.addEventListener('click', filterTodo);


//Functions
function addTodo(event) {
  //prevent form from submitting
  event.preventDefault();
  if (newTask.value === '') {
    alert('Enter a task');
  } else {
    btn_colors = {
      'hi': 'hiP',
      'med': 'medP',
      'low': 'lowP'
    }
    radios = document.getElementsByName('rgPrior');

    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        btn_selected_color = (btn_colors[radios[i].value]);
        break;
      }
    }
    //create div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //create li

    const newToDo = document.createElement('li');
    newToDo.innerText = newTask.value;
    newToDo.classList.add('todo-item');
    newToDo.className = btn_selected_color;
    todoDiv.appendChild(newToDo);

    //TaskDone Button
    const doneButton = document.createElement('button');
    doneButton.innerHTML = '<i class="fas fa-check"></i>';
    doneButton.classList.add("Completed-Btn");
    todoDiv.appendChild(doneButton);
    //Delete Button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add("Delete-Btn");
    todoDiv.appendChild(deleteButton);
    //Append to List
    oldList.appendChild(todoDiv);
    //clear input value
    newTask.value = "";
  }
}

function deleteChecked(e) {
  const item = e.target;
  //Delete
  if (item.classList[0] === "Delete-Btn") {
    const todo = item.parentElement;
    //Animation
    todo.classList.add('fall');
    todo.addEventListener('transitionend', function () {
      todo.remove();
    });

  }


  //CheckList
  if (item.classList[0] === "Completed-Btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}


function filterTodo(e) {
  const todos = oldList.childNodes;
  todos.forEach((todo) => {


    //check for undefined values and skips then and only apply the switch statement on nodes with properties 
    if (todo.classList !== undefined) {
      switch (e.target.value) {
        case "all":
          todo.style.display = "flex";
          break;
        case "completed":
          if (todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
        case "incompleted":
          if (!todo.classList.contains('completed')) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
      }


    }
  }
  
  );
}
  // todos.forEach(function (todo) {
  //   switch (e.target.value) {
  //     case "all":
  //       todo.style.display = 'flex';
  //       break;
  //     case "completed":
  //       if (todo.classList.contains('completed')) {
  //         todo.style.display = 'flex';
  //       } else {
  //         todo.style.display = 'none';
  //       }
  //   }
  // });
