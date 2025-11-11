const form = document.querySelector("#form");
const usernameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const formLogin = document.querySelector("#formlogin");
const adminUsername = document.querySelector("#usernamelogin");
const adminPassword = document.querySelector("#passwordlogin");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if (!usernameInput.value.trim()) {
            alert("Username is required.");
            return;
        }

        if (!emailInput.value.trim()) {
            alert("Email is required.");
            return;
        }

        if (!passwordInput.value.trim()) {
            alert("Password is required.");
            return;
        }

        if (passwordInput.value.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        if (usernameInput.value == "admin") {
            alert("Username already exists.");
            return;
        }

        alert("Registration successful!");
        window.location.href = "https://github.com/projekt-create/registar-login";
    });
}

if (formLogin) {
    formLogin.addEventListener("submit", (e) => {
        e.preventDefault();

        if (!adminUsername.value.trim()) {
            alert("Username is required.");
            return;
        }

        if (!adminPassword.value.trim()) {
            alert("Password is required.");
            return;
        }

        if (adminPassword.value.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        if (adminUsername.value == "admin" && adminPassword.value == "admin123") {
            alert("Welcome Admin!");
            window.location.href = "https://github.com/projekt-create/registar-login";
            return;
        }

        alert("Login successful!");
    });
}

