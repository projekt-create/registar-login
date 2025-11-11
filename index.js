const form = document.querySelector("#form");
const usernameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const adminUsername = document.querySelector("#username-login");
const adminPassword = document.querySelector("#password-login");

form.addEventListener("submit", (event) => {
    event.preventDefault();

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

    if (passwordInput.value.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }

    if (usernameInput.value.trim() == "admin") {
        alert("Username 'admin' is not allowed.");
        return;
    }

    if (adminUsername.value.trim() == "admin" && adminPassword.value.trim() == "admin123") {
        window.location.href = "./index.html";
        return;
    }

    alert("Form submitted successfully!");
});
