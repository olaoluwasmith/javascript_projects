const password = document.getElementById('password');
const togglePassword = document.getElementById('toggle-password');
const form = document.querySelector('form');

togglePassword.addEventListener('click', function () {
    if (password.type === 'password') {
        password.type = 'text';
    } else {
        password.type = 'password';
    }
});

form.addEventListener('submit', function (e) {
    e.preventDefault()
})