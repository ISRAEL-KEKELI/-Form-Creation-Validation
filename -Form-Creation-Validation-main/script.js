// Task Requirement: Start with DOMContentLoaded Event
document.addEventListener('DOMContentLoaded', function() {

    // Task Requirement: Form Selection
    const form = document.getElementById('registration-form');

    // Task Requirement: Feedback Division Selection
    const feedbackDiv = document.getElementById('form-feedback');

    // Task Requirement: Form Submission Event Listener
    form.addEventListener('submit', function(event) {
        
        // Task Requirement: Prevent form submission
        event.preventDefault();

        // --- Input Retrieval and Trimming ---
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // --- Validation Logic Initialization ---
        let isValid = true; // Task Requirement: Initialize isValid
        const messages = [];  // Task Requirement: Initialize messages array

        // --- Username Validation ---
        // Task Requirement: Check if username.length is less than 3
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // --- Email Validation ---
        // Task Requirement: Check if email includes both '@' and '.'
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push("Please enter a valid email address (must contain '@' and '.').");
        }

        // --- Password Validation ---
        // Task Requirement: Ensure password.length is at least 8
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // --- Displaying Feedback ---

        // Task Requirement: Make feedbackDiv visible
        feedbackDiv.style.display = "block";

        if (isValid) {
            // Success Case: Task Requirement: If isValid is true
            
            // Task Requirement: Set success textContent
            feedbackDiv.textContent = "Registration successful! 🎉";
            
            // Task Requirement: Set success color and background
            feedbackDiv.style.color = "#155724"; // Dark Green Text
            feedbackDiv.style.backgroundColor = "#d4edda"; // Light Green Background
            feedbackDiv.style.borderColor = "#c3e6cb"; // Green Border

            // Optional: Clear form inputs on success
            form.reset();
            
        } else {
            // Failure Case: Task Requirement: If isValid is false
            
            // Task Requirement: Join messages with <br> and assign to innerHTML
            feedbackDiv.innerHTML = messages.join('<br>');
            
            // Task Requirement: Set error color and background
            feedbackDiv.style.color = "#721c24"; // Dark Red Text
            feedbackDiv.style.backgroundColor = "#f8d7da"; // Light Red Background
            feedbackDiv.style.borderColor = "#f5c6cb"; // Red Border
        }
    });
});
