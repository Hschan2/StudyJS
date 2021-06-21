const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); // const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function DeleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    
    button.innerHTML = "Delete";
    button.addEventListener("click", DeleteToDo());
    li.appendChild(span);
    li.appendChild(button);
    span.innerHTML = newTodo;
    toDoList.appendChild(li);
}

function handleToDosubmit(event) {
    event.preventDefault();

    const newTodo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDosubmit);