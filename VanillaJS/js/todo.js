const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input"); // const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const toDos = []; // for saving

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos)); // String으로 저장
}

function DeleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");

    span.innerText = newTodo;

    const button = document.createElement("button");
    
    button.innerText = "Delete";
    button.addEventListener("click", DeleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();

    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


