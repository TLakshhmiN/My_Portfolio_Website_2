document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    function validateName() {
        const nameRegex = /^[a-zA-Z\s]{2,30}$/;
        if (!nameRegex.test(nameInput.value.trim())) {
            nameInput.classList.add('error');
            nameError.style.display = 'block';
            return false;
        }
        nameInput.classList.remove('error');
        nameError.style.display = 'none';
        return true;
    }

    function validateEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            emailInput.classList.add('error');
            emailError.style.display = 'block';
            return false;
        }
        emailInput.classList.remove('error');
        emailError.style.display = 'none';
        return true;
    }

    function validateMessage() {
        if (messageInput.value.trim().length < 10) {
            messageInput.classList.add('error');
            messageError.style.display = 'block';
            return false;
        }
        messageInput.classList.remove('error');
        messageError.style.display = 'none';
        return true;
    }

    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    messageInput.addEventListener('input', validateMessage);

    
    
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.testimonial-dot');
    const prevBtn = document.querySelector('.testimonial-nav.prev');
    const nextBtn = document.querySelector('.testimonial-nav.next');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.style.transform = `translateX(-${index * 100}%)`);
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            currentSlide = parseInt(this.dataset.slide);
            showSlide(currentSlide);
        });
    });

});