const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let todos = [];

function saveToDo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    saveToDo();
}

function listTodo(newTodo) {
    console.log(newTodo);
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText ="X";
    button.addEventListener("click", deleteTodo);
    span.innerText = newTodo.text;
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function addTodo(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }
    todos.push(newTodoObj);
    listTodo(newTodoObj);
    saveToDo();
}

toDoForm.addEventListener("submit", addTodo);

const savedTodo = localStorage.getItem(TODOS_KEY);

if(savedTodo !== null) {
    const parsedTodo = JSON.parse(savedTodo);
    todos = parsedTodo;
    parsedTodo.forEach(listTodo);
}