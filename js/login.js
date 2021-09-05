const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("#username"); 
const firstMassage = document.querySelector("#st-massage");
const greeting = document.querySelector("#greeting");

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add("hidden");
    firstMassage.classList.add("hidden");
    const username = loginInput.value;
    localStorage.setItem("username", username);
    printGreeting(username)
}

function printGreeting(username) {
    greeting.innerHTML = `Hello, ${username}`;
    greeting.classList.remove("hideen");
}

const savedUserName = localStorage.getItem("username");

if(savedUserName === null) {
    loginForm.classList.remove("hidden");
    firstMassage.classList.remove("hidden");
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    printGreeting(savedUserName)
}