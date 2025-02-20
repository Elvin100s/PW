// Function to toggle dark mode
function toggleDarkMode() {
    // Get the body element
    const body = document.body;
    // Get the dark mode toggle button
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    
    // Check if the body has the 'dark-mode' class
    if (body.classList.contains('dark-mode')) {
        // If it does, remove the 'dark-mode' class to switch to light mode
        body.classList.remove('dark-mode');
        // Change the icon to the moon icon
        darkModeToggle.innerHTML = '🌓';
    } else {
        // If it doesn't, add the 'dark-mode' class to switch to dark mode
        body.classList.add('dark-mode');
        // Change the icon to the sun icon
        darkModeToggle.innerHTML = '☀️';
    }
}

// Add an event listener to the dark mode toggle button
document.querySelector('.dark-mode-toggle').addEventListener('click', toggleDarkMode);

// Function to handle form submission
function handleFormSubmit(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Get the form element
    const form = event.target;
    // Get the form data
    const formData = new FormData(form);
    
    // Create an object to store the form data
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    };
    
    // Log the form data to the console (for debugging purposes)
    console.log(data);
    
    // Clear the form fields
    form.reset();
    
    // Show a success message to the user
    alert('Message sent successfully!');
}

// Add an event listener to the contact form
document.querySelector('.contact-form').addEventListener('submit', handleFormSubmit);

// Function to add smooth scrolling to navigation links
function smoothScrollToSection(event) {
    // Prevent the default link behavior
    event.preventDefault();
    
    // Get the target section ID from the link's href attribute
    const targetId = event.target.getAttribute('href');
    
    // Get the target section element
    const targetSection = document.querySelector(targetId);
    
    // Scroll to the target section smoothly
    targetSection.scrollIntoView({ behavior: 'smooth' });
}

// Add event listeners to all navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', smoothScrollToSection);
});
