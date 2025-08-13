// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.querySelector('.contact-form form');
//     // console.log("script loaded.");

//     form.addEventListener('submit', function (e) {
//         e.preventDefault();

//         // const firstName = document.getElementById('first-name');
//         // const lastName = document.getElementById('last-name');
//         const email = document.getElementById('email');
//         const phone = document.getElementById('phone');
//         // const seed = document.getElementById('seeds');

//         let errors = [];

//         const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailPattern.test(email.value)) {
//             errors.push("Enter a valid email address.");
//         }

//         const phonePattern = /^\+?(\d{1,3})?[\s.-]?\(?(\d{3})\)?[\s.-]?(\d{3})[\s.-]?(\d{4})$/;
//         if (phone.value && !phonePattern.test(phone.value)) {
//             errors.push("Phone number must be in 123-456-7890.");
//         }

//         if (errors.length > 0) {
//             alert(errors.join("\n"));
//         } else {
//             form.submit();
//         }
//     });

// });

