const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const errorMsg = document.querySelector('.error-msg');

function checkPasswords() {
    if (password.value !== confirmPassword.value && confirmPassword.value !== '') {
        password.classList.add('error');
        confirmPassword.classList.add('error');
        errorMsg.style.display = 'block';
    } else {
        password.classList.remove('error');
        confirmPassword.classList.remove('error');
        errorMsg.style.display = 'none';
    }
}

password.addEventListener('input', checkPasswords);
confirmPassword.addEventListener('input', checkPasswords);
