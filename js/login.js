const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("#username"); 
const firstMassage = document.querySelector("#st-massage");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME="hidden";
const USER_NAME="username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    firstMassage.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USER_NAME, username);
    printGreeting(username)
}

function printGreeting(username) {
    greeting.innerHTML = `Hello, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USER_NAME);

if(savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    firstMassage.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    printGreeting(savedUserName)
}