let username_inp = document.getElementById('username-inp');
let password_inp = document.getElementById('password-inp');
let signin_btn = document.querySelector('.sign-in-btn');
let err = document.getElementById('pass-err');
let name_err = document.getElementById('name-err');

signin_btn.addEventListener('click', () => {
    let username = username_inp.value.trim();
    let password = password_inp.value.trim();
    
    // Clear previous error messages
    name_err.innerHTML = '';
    err.innerHTML = '';

    let valid = true;

    // Validate username
    if (username.length === 0) {
        name_err.innerHTML = 'This field is required';
        valid = false;
    }

    // Validate password
    if (password.length === 0) {
        err.innerHTML = 'This field is required';
        valid = false;
    } else if (password.length < 8) {
        err.innerHTML = 'Password should be at least 8 characters long';
        valid = false;
    }

    
    if (valid) {
        //if the credentials are valid please redirect the user to the dashboard page
    }
});
