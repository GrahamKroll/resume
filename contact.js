document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Display the message
    document.getElementById('message').textContent = "You have been added to the email list!";
});

// Optionally, you can add functionality to clear the form fields when the cancel button is clicked
document.getElementById('cancelButton').addEventListener('click', function() {
    document.getElementById('name').value = "";
    document.getElementById('email').value = ""; 
    document.getElementById('heard').value = "";
});
