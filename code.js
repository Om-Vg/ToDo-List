//Selectors
const newTask = document.querySelector(".task");
const Submit = document.querySelector(".submit-button");
const oldList = document.querySelector(".Lists");
const filterOption = document.querySelector(".filter-todo");
const sortList = document.querySelector(".sortBtn");


//EventListners
// document.addEventListener('DOMContentLoaded',getTodos);
Submit.addEventListener('click', addTodo);
oldList.addEventListener('click', deleteChecked);
filterOption.addEventListener('click', filterTodo);
sortList.addEventListener('click', sortTodo);

//Functions
function addTodo(event) {
  //prevent form from submitting
  event.preventDefault();
  if (newTask.value === '') {
    alert('Enter a task');
  } else {
    // btn_colors = {
    //   'hi': 'hiP',
    //   'med': 'medP',
    //   'low': 'lowP'
    // }
    // radios = document.getElementsByName('rgPrior');

    // for (var i = 0, length = radios.length; i < length; i++) {
    //   if (radios[i].checked) {
    //     btn_selected_color = (btn_colors[radios[i].value]);
    //     break;
    //   }
    // }
    //create div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //create li

    const newToDo = document.createElement('li');
    newToDo.innerText = newTask.value;
    newToDo.classList.add('todo-item');
    // newToDo.className = btn_selected_color;
    todoDiv.appendChild(newToDo);
    //Save to local storage
    // saveLocalTodos(newTask.value);

    //Priority Button
    const starButton = document.createElement('button');
    starButton.innerHTML = '<i class="fas fa-star"></i>';
    starButton.classList.add("Star-Btn");
    todoDiv.appendChild(starButton);
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

  //Star
  if (item.classList[0] === "Star-Btn") {
    const todo = item.parentElement;
    todo.classList.toggle("star");
  }
}
//Sort
function sortTodo(e) {

  oldList.sort();
}


//Filter
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
        case "star":
          if (todo.classList.contains("star")) {
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
// function saveLocalTodos(todo) {
//   let todos;
//   if (localStorage.getItem("todos") === null) {
//     todos = [];
//   } else {
//     todos = JSON.parse(localStorage.getItem("todos"));
//   }


 
//   localStorage.setItem("todos", JSON.stringify(todos));
//   todos.push(todo);
// }

// function getTodos(){
//   console.log("hello");
//   let todos;
//   if (localStorage.getItem("todos") === null) {
//     todos = [];
//   } else {
//     todos = JSON.parse(localStorage.getItem("todos"));
//   }
//   todo.forEach(function(todo){

//     const todoDiv = document.createElement("div");
//     todoDiv.classList.add("todo");
//     //create li

//     const newToDo = document.createElement('li');
//     newToDo.innerText = todo;
//     newToDo.classList.add('todo-item');
//     // newToDo.className = btn_selected_color;
//     todoDiv.appendChild(newToDo);
    
//     //Priority Button
//     const starButton = document.createElement('button');
//     starButton.innerHTML = '<i class="fas fa-star"></i>';
//     starButton.classList.add("Star-Btn");
//     todoDiv.appendChild(starButton);
//     //TaskDone Button
//     const doneButton = document.createElement('button');
//     doneButton.innerHTML = '<i class="fas fa-check"></i>';
//     doneButton.classList.add("Completed-Btn");
//     todoDiv.appendChild(doneButton);
//     //Delete Button
//     const deleteButton = document.createElement('button');
//     deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
//     deleteButton.classList.add("Delete-Btn");
//     todoDiv.appendChild(deleteButton);
//     //Append to List
//     oldList.appendChild(todoDiv);

//   });
// }

// function removeLocalTodos(){
//   let todos;
//   if (localStorage.getItem("todos") === null) {
//     todos = [];
//   } else {
//     todos = JSON.parse(localStorage.getItem("todos"));
//   }
// }