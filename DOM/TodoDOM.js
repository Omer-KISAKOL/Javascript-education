const textInputDOM = document.getElementById("todo-input");
const btnAddTodoDOM = document.getElementById("add-todo");
const todosDOM = document.querySelector("#todos");
const btnClearDOM = document.querySelector("#clear");

let textInputValue = "";
let todos = [];

textInputDOM.addEventListener("change", inputTodo);

btnAddTodoDOM.addEventListener("click", addTodo);

btnClearDOM.addEventListener("click", clearTodos);

function inputTodo(event){
    textInputValue = event.target.value;
}

function addTodo(e) {
    e.preventDefault();
    todos.unshift({ id: todos.length + 1, todoTitle: textInputValue });
    textInputDOM.value = "";
    displayTodos();
}


function clearTodos() {
    todos.splice(0, todos.length);
    displayTodos();
}

function displayTodos() {
    let result = "";

    if (todos.length === 0) {
        todosDOM.innerHTML = "Liste Boş!";
    } else {
        todos.forEach((item) => {
            result += `
                <li class="flex justify-between border px-4 py-3 flex items-center justify-between"> 
                <span>${item.todoTitle}</span> 
                <button class="text-red-400" onclick="deleteTodo(${item.id})">Sil</button> 
                </li>
                `;
            }
        );
        todosDOM.innerHTML = result;
    }
}

function deleteTodo(id) {
    let deletedId;

    for (let index in todos) {
        if (todos[index].id == id) {
            deletedId = index;
        }
    }

    todos.splice(deletedId, 1);
    displayTodos();
}

function clearTodos() {
    todos.splice(0, todos.length);
    displayTodos();
}

displayTodos();