window.addEventListener('DOMContentLoaded', () => {
    // Existing code for the animated heading
    const headingText = "Welcome to the pet store";
    const headingContainer = document.getElementById("animated-heading");

    // Split the text into letters and wrap each in a span
    headingText.split("").forEach((char, index) => {
        const span = document.createElement("span");
        span.classList.add("letter");
        span.style.animationDelay = `${index * 0.1}s`;
        span.textContent = char === " " ? "\u00A0" : char; // Handle spaces
        headingContainer.appendChild(span);
    });

    // Adding the navigateToLogin function and attaching it to the button
    const loginButton = document.querySelector(".login-button");
    loginButton.addEventListener("click", navigateToLogin);

    function navigateToLogin() {
        // Navigate to another HTML page (e.g., login.html)
        window.location.href = 'index.html';
    }
});
