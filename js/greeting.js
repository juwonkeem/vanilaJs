const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logoutForm = document.querySelector("#logout-form");
const content = document.querySelector("#login-form-div");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const onLoginSubmit = (e) => {
    e.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    //logoutForm.classList.remove(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
    window.location.reload();
}

const paintGreetings = (username) => {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    
    logoutForm.classList.remove(HIDDEN_CLASSNAME);
}

const onLogoutSubmit = (e) => {
    e.preventDefault();
    localStorage.removeItem(USERNAME_KEY);
    logoutForm.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    window.location.reload()
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
    logoutForm.classList.add(HIDDEN_CLASSNAME);
} else {
    //show the greetings
    paintGreetings(savedUsername);
    logoutForm.addEventListener("submit", onLogoutSubmit);
    logoutForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);
}

