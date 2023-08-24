const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {};

    for (let [name, value] of formData) {
        data[name] = value;
    }

    if (!data.email || !data.password) {
        alert('All fields must be filled out');
        return;
    }

    console.log(data);
    loginForm.reset();
});

