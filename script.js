document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    // Simple validation
    if(name && email && message) {
        alert("Thank you, " + name + "! Your message has been sent.");
        // Optionally, you can reset the form after submission
        document.getElementById("contactForm").reset();
    } else {
        alert("Please fill out. Thank You");
    }
});
