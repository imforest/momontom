const todoForm = document.querySelector(".js-todo-form"),
    todoInput = todoForm.querySelector("input"),
    todoList = document.querySelector(".js-todo-list");

const TODO_LS = "todos";
todos = [];

function loadTodos() {
    const loadedTodos = localStorage.getItem(TODO_LS);
    if (loadedTodos) {
        const parsedTodos = JSON.parse(loadedTodos);
        parsedTodos.forEach(todo => {
           paintTodo(todo.text);
        });
    }
}

function saveTodos() {
    localStorage.setItem(TODO_LS, JSON.stringify(todos));
}

function paintTodo(todo) {
    const newId = Date.now() + todos.length;
    const li = document.createElement("li");
    li.id = newId;
    const span = document.createElement("span");
    span.innerHTML = todo;
    const button = document.createElement("button");
    button.innerHTML = "❌";
    button.addEventListener("click", handleDeleteTodo);

    li.appendChild(button);
    li.appendChild(span);
    todoList.appendChild(li);

    const todoObj = {
        "text": todo,
        "id": newId,
    };
    todos.push(todoObj);
    saveTodos();
}

function handleSubmit(e) {
    e.preventDefault();
    const todo = todoInput.value;
    paintTodo(todo);
    todoInput.value = "";
}

function handleDeleteTodo(e) {
    const button = e.target;
    const li = button.parentNode;
    const id = parseInt(li.id);

    todoList.removeChild(li);
    cleanTodos = todos.filter(todo => todo.id !== id);
    todos = cleanTodos;
    saveTodos();
}

function init() {
    loadTodos();
    todoForm.addEventListener("submit", handleSubmit);
}
init();