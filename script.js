document.addEventListener('DOMContentLoaded', function() {
  const passwordList = document.getElementById('password-list');
  const addPasswordForm = document.getElementById('add-password-form');

  addPasswordForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;
    const url = document.getElementById('url').value;

    if (login && password && url) {
      const newPassword = { login, password, url };
      const savedPasswords = JSON.parse(localStorage.getItem('passwords') || '[]');
      savedPasswords.push(newPassword);
      localStorage.setItem('passwords', JSON.stringify(savedPasswords));
      displayPasswords(savedPasswords);
      addPasswordForm.reset();
    }
  });

  function displayPasswords(passwords) {
    passwordList.innerHTML = '';
    passwords.forEach(function(password, index) {
      const li = document.createElement('li');
      li.textContent = `Login: ${password.login}, Password: ${password.password}, URL: ${password.url}`;
      passwordList.appendChild(li);
    });
  }

  const savedPasswords = JSON.parse(localStorage.getItem('passwords') || '[]');
  displayPasswords(savedPasswords);
});
