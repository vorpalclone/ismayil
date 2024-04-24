document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.querySelector('#registerForm');

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const emailInput = document.querySelector('input[name="email"]');
        const enteredEmail = emailInput.value;

        const usernameInput = document.querySelector('input[name="username"]');
        const enteredUsername = usernameInput.value;
        
        const passwordInput = document.querySelector('input[name="password"]');
        const enteredPassword = passwordInput.value;

        let registeredUsernames = JSON.parse(sessionStorage.getItem('registeredUsernames')) || [];
        let registeredPasswords = JSON.parse(sessionStorage.getItem('registeredPasswords')) || [];

        if (registeredUsernames.includes(enteredUsername)) {
            alert('Bu kullanıcı adı zaten kullanılmaktadır. Lütfen başka bir kullanıcı adı deneyin.');
        } else {
            registeredUsernames.push(enteredUsername);
            sessionStorage.setItem('registeredUsernames', JSON.stringify(registeredUsernames));

            registeredPasswords.push(enteredPassword);
            sessionStorage.setItem('registeredPasswords', JSON.stringify(registeredPasswords));

            alert('Kayıt başarıyla tamamlandı! Lütfen giriş yapın.'); 
            window.location.href = "index.html"; 
        }
    });
});
