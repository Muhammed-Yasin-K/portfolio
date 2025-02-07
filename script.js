// Smooth scrolling fix for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 70, // Offset to prevent header overlap
            behavior: 'smooth'
        });
    });
});

// Contact Form Submission Handling
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual form submission

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name && email && message) {
        alert("Thank you, " + name + "! Your message has been sent.");
        document.getElementById("contact-form").reset(); // Clear form after submission
    } else {
        alert("Please fill out all fields.");
    }
});
