document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('header nav ul');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.querySelector('i').classList.toggle('fa-bars');
            menuToggle.querySelector('i').classList.toggle('fa-times'); // Change icon to 'X'
        });
    }

// 2. Hero Slider (Existing functionality from your original script.js)
const slides = document.querySelectorAll('.hero-slider .slide');
const dots = document.querySelectorAll('.slider-nav .dot');
let currentSlideIndex = 0;

function showSlide(index) {
    if (slides.length === 0 || dots.length === 0) return;

    slides.forEach((slide, idx) => {
        slide.classList.remove('active');
        dots[idx].classList.remove('active');
    });

    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

if (slides.length > 0) {
    showSlide(currentSlideIndex);

    // Khi bấm chấm tròn thì chuyển đến slide tương ứng
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            currentSlideIndex = i;
            showSlide(currentSlideIndex);
        });
    });
}

    // 3. Password Visibility Toggle
    const passwordToggles = document.querySelectorAll('.password-toggle');

    passwordToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const passwordInput = toggle.previousElementSibling; // The input right before the toggle
            const icon = toggle.querySelector('i');

            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                passwordInput.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    });

    // 4. Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        revealElements.forEach(element => {
            // Get position of the element relative to the viewport
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // If the element is within the viewport (e.g., 80% from top)
            if (elementTop < windowHeight - (windowHeight * 0.1)) {
                element.classList.add('active');
            } else {
                // Optional: remove 'active' class if you want elements to hide again when scrolling up
                // element.classList.remove('active');
            }
        });
    };

    // Run once on load to reveal elements already in view
    revealOnScroll();
    // Attach to scroll event
    window.addEventListener('scroll', revealOnScroll);

    // 5. Form Submission Feedback (Client-side simulation)
    // Appointment Form
    const appointmentForm = document.querySelector('.appointment-form');
    const appointmentMessage = document.getElementById('form-message');

    if (appointmentForm && appointmentMessage) {
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent actual form submission

            // Simulate sending data
            setTimeout(() => {
                appointmentMessage.textContent = 'Lịch hẹn của bạn đã được gửi thành công! Chúng tôi sẽ liên hệ lại sớm.';
                appointmentMessage.style.color = '#28a745'; // Green for success
                appointmentMessage.style.display = 'block';
                appointmentForm.reset(); // Clear the form
            }, 1000); // Simulate a 1-second delay
        });
    }

    // Contact Form
    const contactForm = document.querySelector('.contact-form');
    const contactFormMessage = document.getElementById('contact-form-message');

    if (contactForm && contactFormMessage) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent actual form submission

            // Simulate sending data
            setTimeout(() => {
                contactFormMessage.textContent = 'Tin nhắn của bạn đã được gửi thành công! Chúng tôi sẽ phản hồi sớm nhất có thể.';
                contactFormMessage.style.color = '#28a745'; // Green for success
                contactFormMessage.style.display = 'block';
                contactForm.reset(); // Clear the form
            }, 1000); // Simulate a 1-second delay
        });
    }
});