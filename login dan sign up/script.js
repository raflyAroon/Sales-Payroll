// script.js
const loginForm = document.querySelector('.login-form1');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    // Hardcoded login validation
    if (username === 'admin' && password === 'admin123') {
        window.location.href = '/login dan sign up/dashboard.html';
    } else {
        alert('Username or password invalid');
    }
});
