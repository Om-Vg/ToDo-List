//Selectors
const newTask = document.querySelector(".task");
const Submit = document.querySelector(".submit-button");
const oldList = document.querySelector(".Lists");



//EventListners
Submit.addEventListener('click',addTodo);
oldList.addEventListener('click',deleteChecked);



//Functions
function addTodo(event)
{
    //prevent form from submitting
    event.preventDefault();
    //create div
    const todoDiv= document.createElement("div");
    todoDiv.classList.add("todo");
    //create li
    const newToDo= document.createElement('li');
    newToDo.innerText=newTask.value;
    newToDo.classList.add('todo-item');
    todoDiv.appendChild(newToDo);
    //TaskDone Button
    const doneButton= document.createElement('button');
    doneButton.innerHTML='<i class="fas fa-check"></i>';
    doneButton.classList.add("Completed-Btn");
    todoDiv.appendChild(doneButton);
    //Delete Button
    const deleteButton= document.createElement('button');
    deleteButton.innerHTML='<i class="fas fa-trash"></i>';
    deleteButton.classList.add("Delete-Btn");
    todoDiv.appendChild(deleteButton);
    //Append to List
    oldList.appendChild(todoDiv);
    //clear input value
    newTask.value="";
}

function deleteChecked(e){
   const item = e.target;
   //Delete
   if(item.classList[0]==="Delete-Btn"){
    const todo = item.parentElement;
    //Animation
    todo.classList.add('fall');
    todo.addEventListener('transitionend',function(){
        todo.remove();
    });
    
   }
    

   //CheckList
   if(item.classList[0]==="Completed-Btn"){
    const todo = item.parentElement;
    todo.classList.toggle("completed");
    }
}