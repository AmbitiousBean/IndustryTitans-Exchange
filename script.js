document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav a").forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth",
                });
            }
        });
    });

    // Mobile navigation toggle
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (navToggle && navMenu) {
        navToggle.addEventListener("click", function () {
            navMenu.classList.toggle("show");
        });
    }

    // Form validation
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const nameInput = document.getElementById("name");
            const emailInput = document.getElementById("email");

            if (nameInput.value.trim() === "" || emailInput.value.trim() === "") {
                alert("Please fill in all fields.");
            } else {
                alert("Application submitted successfully!");
                form.reset(); // Clears form fields after submission
            }
        });
    }

    // Dynamic year update in the footer
    document.getElementById("current-year").textContent = new Date().getFullYear();
});
