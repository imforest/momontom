const nameForm = document.querySelector(".js-name-form"),
    nameInput = nameForm.querySelector("input"),
    greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser",
    SHOW_CN = "showing";

function paintGreeting(text) {
    greeting.querySelector("h1").innerHTML = `Hello ${text}`;
    nameForm.classList.remove(SHOW_CN);
    greeting.classList.add(SHOW_CN);
}
    
function askForName() {
    nameForm.classList.add(SHOW_CN);
    greeting.classList.remove(SHOW_CN);
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser) {
        paintGreeting(currentUser);
    } else {
        askForName();
    }
}

function handleSubmit(e) {
    e.preventDefault()
    const currentUser = nameInput.value;
    localStorage.setItem(USER_LS, currentUser);
    paintGreeting(currentUser);
}

function init() {
    nameForm.addEventListener("submit", handleSubmit)
    loadName();
}
init();