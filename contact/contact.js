document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form');

    form.addEventListener('submit', function (e) {
        if (!form.checkValidity()) {
            e.preventDefault();
            alert("Please fill out the form correctly!");
        } else {
            e.preventDefault();
            alert("Form submitted successfully!");
            form.reset();
        }
    });
});

