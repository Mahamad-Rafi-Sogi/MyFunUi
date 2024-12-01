document.addEventListener("DOMContentLoaded", () => {
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const submitButton = document.getElementById("submit-button");
    const tooltipMessage = document.getElementById("tooltip-message");
    const buttonContainer = document.querySelector(".button-container");

    let position = 0; // Button position: 0 for left, 1 for right.

    // Handle button hover logic
    submitButton.addEventListener("mouseover", () => {
        if (!username.value || !password.value) {
            // Toggle button position
            position = position === 0 ? 1 : 0;
            buttonContainer.style.justifyContent = position === 0 ? "flex-start" : "flex-end";
            tooltipMessage.textContent = "Please fill out both fields to enable the button!";
        } else {
            tooltipMessage.textContent = "";
        }
    });

    // Handle button click
    submitButton.addEventListener("click", () => {
        if (username.value && password.value) {
            alert("abababa pakadliya bhai ne!");
        } else {
            alert("Please fill in all fields before submitting.");
        }
    });
});