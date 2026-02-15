// login.js

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Form submit ko rok do

    // Inputs ko read karo
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple validation
    if(username === "student" && password === "12345") {
        alert("Login successful!");
        // Redirect to dashboard or homepage
        window.location.href = "index.html"; // apne dashboard ka URL yahan
    } else {
        alert("Invalid username or password");
    }
});