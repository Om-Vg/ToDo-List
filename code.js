//Selectors
const newTask = document.querySelector(".task");
const Submit = document.querySelector(".submit-button");
const oldList = document.querySelector(".Lists");



//EventListners
Submit.addEventListener('click',addTodo);




//Functions
function addTodo(event)
{
    //prevent form from submitting
    event.preventDefault();
    console.log("hello");

}