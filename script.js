(<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Industry Titans Exchange</title>
        <link rel="stylesheet" href="styles.css">
        <style>
            /* Your existing styles go here */
        </style>
    </head>
    <body>
    
        <!-- Your existing HTML content goes here -->
    
        <script>
            document.addEventListener('DOMContentLoaded', function () {
                // Smooth scroll effect for navigation links
                const links = document.querySelectorAll('nav a');
                
                links.forEach(link => {
                    link.addEventListener('click', smoothScroll);
                });
    
                function smoothScroll(e) {
                    e.preventDefault();
    
                    const targetId = this.getAttribute('href').substring(1);
                    const targetElement = document.getElementById(targetId);
    
                    window.scroll({
                        top: targetElement.offsetTop - 50, // Adjust this value based on your header height
                        left: 0,
                        behavior: 'smooth'
                    });
                }
    
                // Responsive navigation menu
                const navToggle = document.getElementById('nav-toggle');
                const navMenu = document.getElementById('nav-menu');
    
                navToggle.addEventListener('click', function () {
                    navMenu.classList.toggle('show');
                });
    
                // Form validation
                const form = document.querySelector('form');
    
                form.addEventListener('submit', function (e) {
                    e.preventDefault();
    
                    const nameInput = document.getElementById('name');
                    const emailInput = document.getElementById('email');
    
                    // Example: Simple validation - check if name and email are not empty
                    if (nameInput.value.trim() === '' || emailInput.value.trim() === '') {
                        alert('Please fill in all fields.');
                    } else {
                        // You can add more advanced validation or submit the form data
                        alert('Form submitted successfully!');
                    }
                });
    
                // Dynamic year in the footer
                const currentYear = new Date().getFullYear();
                const yearElement = document.getElementById('current-year');
                yearElement.textContent = currentYear;
            });
        </script>
    
    </body>
    </html>)
    