// connexion.js

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('connexionForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = form.email.value.trim();
    const code = form.code.value.trim();

    if (!email || !code) {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    // Simuler la connexion
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(u => u.email === email && u.code === code);

    if (user) {
      alert('Connexion réussie !');
      localStorage.setItem('userConnecte', JSON.stringify(user));
      window.location.href = 'espace.html';
    } else {
      alert('Email ou code incorrect. Veuillez réessayer.');
    }
  });
});

